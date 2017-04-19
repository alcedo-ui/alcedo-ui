import React, {Component, PropTypes} from 'react';

import Util from '../_vendors/Util';

import FieldMsg from '../FieldMsg';

import './MultipleSelect.css';

export default class MultipleSelect extends Component {

    constructor(props) {

        super(props);

        this.state = {
            hidden: true,
            filter: '',
            infoMsgHidden: true,
            errorMsgHidden: true,
            showAll: false
        };

        this.list = [];
        this.filterList = [];
        this.optionHeight = 40;
        this.maxOptionsHeight = 200;

        this.setPosition = this::this.setPosition;
        this.toggle = this::this.toggle;
        this.filterChangeHandle = this::this.filterChangeHandle;
        this.showInfo = this::this.showInfo;
        this.hideInfo = this::this.hideInfo;
        this.showError = this::this.showError;
        this.hideError = this::this.hideError;
        this.showAllToggle = this::this.showAllToggle;

    }

    /**
     * 设置 option 的位置
     * @param move [boolean] 是否需要移动位置（移动到input上方或下方）
     */
    setPosition(move) {

        const optionsHeight = this.filterList.length > 0 ?
            (this.filterList.length > 10 ? this.maxOptionsHeight : this.filterList.length * this.optionHeight)
            :
            this.optionHeight;

        // 整个控件的偏移
        const offset = Util.getOffset(this.refs.MultipleSelect);

        if (offset) {
            const offsetTop = (offset.top || 0) + 30;

            if (move) {

                // 显示在上方
                // if ((document.body.scrollHeight || document.documentElement.scrollHeight) - offsetTop < optionsHeight) {
                if (offsetTop + this.refs.MultipleSelect.offsetHeight + optionsHeight
                    > (document.body.scrollHeight || document.documentElement.scrollHeight)) {
                    if (this.refs.MultipleSelect) {
                        this.refs.MultipleSelect.className = 'MultipleSelect'
                            + (this.props.className ? ' ' + this.props.className : '') + ' above'
                            + (this.state.hidden ? '' : ' open')
                            + (this.props.invalidMsg ? ' error' : '')
                            + (!this.props.value || this.props.value.length == 0 ? ' empty' : '');
                    }
                    if (this.refs.options) {
                        this.refs.options.style.top = -optionsHeight + 'px';
                    }
                }

                // 显示在下方
                else {
                    if (this.refs.MultipleSelect) {
                        this.refs.MultipleSelect.className = 'MultipleSelect'
                            + (this.props.className ? ' ' + this.props.className : '') + ' below'
                            + (this.state.hidden ? '' : ' open')
                            + (this.props.invalidMsg ? ' error' : '')
                            + (!this.props.value || this.props.value.length == 0 ? ' empty' : '');
                    }
                }

            } else {

                // 如果 options 显示在 input 上方
                if (this.refs.MultipleSelect.className.indexOf('above') != -1 && this.refs.options) {
                    this.refs.options.style.top = -optionsHeight + 'px';
                }

            }
        }

        if (this.refs.options) {
            this.refs.wrapper.style.height = this.refs.trigger.offsetHeight + this.refs.options.offsetHeight + 'px'
        } else {
            this.refs.wrapper.style.height = this.refs.trigger.offsetHeight + 'px'
        }
    }

    toggle(e) {
        const className = e.target.className;
        if (!this.props.disabled
            && className.indexOf('filter') != -1
            && e.target.parentElement.parentElement.parentElement == this.refs.MultipleSelect) {
            this.setState({
                hidden: false
            }, () => {
                this.setPosition(true);
            });
        } else if (
            (
                (className.indexOf('filter') != -1 || className.indexOf('deselectButton') != -1)
                && (e.target.parentElement && e.target.parentElement.parentElement
                && e.target.parentElement.parentElement.parentElement == this.refs.MultipleSelect)
            )
            ||
            (
                className.indexOf('selected') != -1
                && (e.target.parentElement && e.target.parentElement.parentElement == this.refs.MultipleSelect)
            )
            ||
            (
                className.indexOf('option') != -1
                && (e.target.parentElement && e.target.parentElement.parentElement == this.refs.MultipleSelect)
            )
        ) {
            //
        } else {
            this.setState({
                hidden: true
            });
        }
    }

    showAllToggle(e) {
        e.stopPropagation();
        const {showAll}=this.state;
        this.setState({showAll: !showAll})
    }

    deselect(item, e) {

        e.stopPropagation();

        if (!this.props.disabled) {

            let value = this.props.value.slice();
            for (let i = 0, len = value.length; i < len; i++) {
                let valueItem = value[i];
                if (typeof valueItem == 'object' && valueItem.key === item.key) {
                    value.splice(i, 1);
                    break;
                } else if (valueItem === item) {
                    value.splice(i, 1);
                    break;
                }
            }

            this.setPosition(false);
            this.props.onChange && this.props.onChange(value);
        }

    }

    select(item, e) {

        e.stopPropagation();

        let value = this.props.value.slice();
        value.push(item);
        this.setState({
            filter: ''
        }, () => {
            this.setPosition(false);
            this.props.onChange && this.props.onChange(value);

        });
    }

    filterChangeHandle(e) {
        this.setState({
            filter: e.target.value
        }, () => {
            this.setPosition(false);
        });
    }

    getRestList(data, value) {

        let list = [];
        // debugger
        for (let dataItem of data) {

            if (value && value.length) {
                let flag = false;
                for (let valueItem of value) {
                    if (typeof dataItem == 'object' && dataItem.key === valueItem.key) {
                        flag = true;
                        break;
                    } else if (dataItem === valueItem) {
                        flag = true;
                        break;
                    }
                }

                if (!flag) {
                    list.push(dataItem);
                }
            } else {
                list.push(dataItem);
            }
        }

        return list;

    }

    getFilterList(list, filter) {
        return list.filter((value) => {
            if (typeof value == 'object') {
                return value.text.toUpperCase().indexOf(filter.toUpperCase()) != -1;
            } else {
                return value.toUpperCase().indexOf(filter.toUpperCase()) != -1;
            }
        });
    }

    showInfo() {
        this.setState({
            infoMsgHidden: false
        });
    }

    hideInfo() {
        this.setState({
            infoMsgHidden: true
        });
    }

    showError() {
        this.setState({
            errorMsgHidden: false
        });
    }

    hideError() {
        this.setState({
            errorMsgHidden: true
        });
    }

    componentDidMount() {
        if (window.addEventListener) {
            window.addEventListener('click', this.toggle);
            window.addEventListener('resize', this.setPosition);
        } else {
            window.attachEvent('click', this.toggle);
            window.attachEvent('resize', this.setPosition);
        }

    }

    componentWillUnmount() {
        if (window.removeEventListener) {
            window.removeEventListener('click', this.toggle);
            window.removeEventListener('resize', this.setPosition);
        } else {
            window.detachEvent('click', this.toggle);
            window.detachEvent('resize', this.setPosition);
        }
    }

    render() {

        const {data, width, className, style, name, invalidMsg, value, placeholder, disabled, infoMsg} = this.props;
        const {hidden, filter, infoMsgHidden, errorMsgHidden, showAll} = this.state;
        const {
            optionHeight, maxOptionsHeight, deselect, select, filterChangeHandle,
            getRestList, getFilterList, showInfo, hideInfo, showError, hideError
        } = this;

        this.list = getRestList(data, value);

        this.filterList = getFilterList(this.list, filter);

        let componentWidth = width || '100%';

        const triggerStyle = {
            width: componentWidth
        };

        let filterStyle = {
            width: '100%'
        };

        let selectedStyle ={};
        if(value && value.length){
            selectedStyle.borderTop = '1px solid #dfdfdf';
            selectedStyle.height = showAll ? 'auto': '40px';
        }else{
            selectedStyle.borderTop = 'none';
            selectedStyle.height = 0;
        }

        const emptyOptionsStyle = {
            width: componentWidth,
            height: hidden ? 0 : optionHeight,
            maxHeight: maxOptionsHeight
        };

        const optionsStyle = {
            width: componentWidth,
            height: hidden ? 0 : this.filterList.length * optionHeight,
            maxHeight: maxOptionsHeight
        };

        const optionStyle = {
            height: optionHeight,
            lineHeight: optionHeight + 'px'
        };

        const wrapperHeight = optionsStyle.height > maxOptionsHeight ? maxOptionsHeight : optionsStyle.height;
        let wrapperStyle={};

        if(this.refs.trigger){
            wrapperStyle.height = wrapperHeight < emptyOptionsStyle.height ? emptyOptionsStyle.height + 40 : wrapperHeight + 40
        }

        return (
            <div ref="MultipleSelect"
                 className={'MultipleSelect'
                 + (className ? ' ' + className : '')
                 + (hidden ? '' : ' open')
                 + (invalidMsg ? ' error' : '')
                 + (!value || value.length == 0 ? ' empty' : '')}
                 style={style}>

                {
                    (value instanceof Array ? value : []).map((item, index) => {
                        return (
                            <input key={index}
                                   type="hidden"
                                   name={name + '[' + index + ']'}
                                   value={typeof item == 'object' ? item.value : item}/>
                        );
                    })
                }
                <div className={`selected-container ${hidden ? 'hidden' : 'open'}`}
                     ref="selectedContainer"
                     style={selectedStyle}>
                    {
                        showAll ?
                            null
                            :
                            (
                                value.length > 2 ?
                                    <div className="more-selected">
                                        {value.length} selected
                                    </div>
                                    :
                                    null

                            )
                    }

                    {
                        showAll ?
                            (value instanceof Array ? value : [] ).map((item, index) => {
                                return (
                                    <div key={index}
                                         className="selected"
                                         disabled={disabled}>
                                            <span className="text">
                                                {typeof item == 'object' ? item.text : item}
                                            </span>
                                        <span className="deselectButton"
                                              onClick={deselect.bind(this, item)}>×</span>
                                    </div>
                                )
                            })
                            :
                            (value instanceof Array ? value : [] ).map((item, index) => {
                                if (index < 2) {
                                    return (
                                        <div key={index}
                                             className="selected"
                                             disabled={disabled}>
                                        <span className="text">
                                            {typeof item == 'object' ? item.text : item}
                                        </span>
                                            <span className="deselectButton"
                                                  onClick={deselect.bind(this, item)}>×</span>
                                        </div>
                                    )
                                }
                            })
                    }
                    <i className={`fa fa-angle-double-up ${showAll ? 'up' : 'down'} multiple-select-trigger-right-icon ${value.length > 2 ? '' : 'disabled'}`}
                       aria-hidden="true"
                       onClick={(e)=> {
                           if (value.length > 2) {
                               this.showAllToggle(e)
                           }
                       }}></i>
                </div>
                <div className={`dropdown-select-inner ${hidden ? 'hidden' : 'open'}`}
                     ref="wrapper"
                     style={wrapperStyle}>
                    <div ref="trigger"
                         className="trigger"
                         style={triggerStyle}
                         disabled={disabled}
                         onMouseOver={showError}
                         onMouseOut={hideError}>
                            <input ref="filter"
                                   type="text"
                                   className="filter"
                                   style={filterStyle}
                                   value={filter}
                                   placeholder={placeholder}
                                   onChange={filterChangeHandle}
                                   disabled={disabled}
                                   onMouseOver={showInfo}
                                   onMouseOut={hideInfo}/>

                    </div>

                    {
                        hidden ?
                            null
                            :
                            (
                                this.list.length == 0 ?
                                    <div ref="options"
                                         className="options"
                                         style={emptyOptionsStyle}>
                                        <div className="option disabled"
                                             style={optionStyle}>
                                            All options are selected
                                        </div>
                                    </div>
                                    :
                                    (
                                        this.filterList.length == 0 ?
                                            <div ref="options"
                                                 className="options"
                                                 style={emptyOptionsStyle}>
                                                <div className="option disabled"
                                                     style={optionStyle}>
                                                    No value matched
                                                </div>
                                            </div>
                                            :
                                            <div ref="options"
                                                 className="options"
                                                 style={optionsStyle}>
                                                {
                                                    this.filterList.map((item, index) => {
                                                        return (
                                                            <div key={index}
                                                                 className="option"
                                                                 style={optionStyle}
                                                                 onClick={select.bind(this, item)}>
                                                                {typeof item == 'object' ? item.text : item}
                                                            </div>
                                                        );
                                                    })
                                                }
                                            </div>
                                    )
                            )
                    }

                    {
                        invalidMsg && !errorMsgHidden ?
                            <FieldMsg type="error"
                                      msg={invalidMsg}/>
                            :
                            null
                    }

                    {
                        infoMsg && !errorMsgHidden ?
                            <FieldMsg type="info"
                                      msg={infoMsg}/>
                            :
                            null
                    }
                </div>
            </div>
        );

    }
};

MultipleSelect.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    style: PropTypes.object,
    data: PropTypes.array,
    value: PropTypes.array,
    width: PropTypes.number,
    invalidMsg: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    infoMsg: PropTypes.string,
    onChange: PropTypes.func
};
