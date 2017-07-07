import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Util from '../_vendors/Util';
import Checkbox from '../Checkbox';

import './MultipleSelect.css';

export default class MultipleSelect extends Component {

    constructor(props) {

        super(props);

        this.state = {
            hidden: true,
            filter: '',
            showAll: false
        };

        this.list = [];
        this.filterList = [];
        this.optionHeight = 50;
        this.maxOptionsHeight = 300;

        this.setPosition = this::this.setPosition;
        this.toggle = this::this.toggle;
        this.filterChangeHandle = this::this.filterChangeHandle;
        this.showAllToggle = this::this.showAllToggle;
        this.getValue = this::this.getValue;

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
            this.refs.wrapper.style.height = this.refs.trigger.offsetHeight + this.refs.options.offsetHeight + 'px';
        } else {
            this.refs.wrapper.style.height = this.refs.trigger.offsetHeight + 'px';
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
        const {showAll} = this.state;
        this.setState({showAll: !showAll});
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
        if(typeof item == 'object'){
            let flag = false;
           for(let i =0; i< value.length;i++){
               if(item.key == value[i].key){
                   flag = true;
                   break;
               }
           }
           if(flag){
               let evens = _.remove(value, function(n) {
                   return n.key == item.key;
               });
           }else{
               value.push(item);
           }
        }else{
            if(value.includes(item)){
                let evens = _.remove(value, function(n) {
                    return n == item
                });
            }else{
                value.push(item);
            }
        }
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

    getValue(item) {
        let value = this.props.value.slice();
        let flag = false;
        if(typeof item == 'object'){
            for(let i =0; i< value.length;i++){
                if(item.key == value[i].key){
                    flag = true;
                    break;
                }
            }
        }else{
            if(value.includes(item)){
                flag = true;
            }
        }
        return flag
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

        const {data, width, className, style, name, value, placeholder, disabled} = this.props;
        const {hidden, filter, showAll} = this.state;
        const {
            optionHeight, maxOptionsHeight, deselect, select, filterChangeHandle,
            getValue, getFilterList
        } = this;

        // this.list = getRestList(data, value);

        this.filterList = getFilterList(data, filter);
        console.log(this.filterList)
        let componentWidth = width || '100%';

        const triggerStyle = {
            width: componentWidth
        };

        let filterStyle = {
            width: '100%'
        };

        let selectedStyle = {};
        if (value && value.length) {
            selectedStyle.borderTop = '1px solid #dfdfdf';
            selectedStyle.height = showAll ? 'auto' : '40px';
        } else {
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
            height: hidden ? 0 : 'auto',
            maxHeight: maxOptionsHeight
        };

        const optionStyle = {
            height: optionHeight,
            lineHeight: optionHeight + 'px'
        };

        const optionsHeight = (this.filterList.length * optionHeight) > maxOptionsHeight ? maxOptionsHeight : this.filterList.length * optionHeight;

        const wrapperStyle = {
            width: componentWidth,
            height: hidden ? 40 : (optionsHeight < emptyOptionsStyle.height ? (emptyOptionsStyle.height + 40) : (optionsHeight + 40))
        };
        // debugger
        return (
            <div ref="MultipleSelect"
                 className={'MultipleSelect'
                 + (className ? ' ' + className : '')
                 + (hidden ? '' : ' open')
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
                                );
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
                                    );
                                }
                            })
                    }
                    <i className={`fa fa-angle-double-down ${showAll ? 'up' : 'down'} multiple-select-trigger-right-icon ${value.length > 2 ? '' : 'disabled'}`}
                       aria-hidden="true"
                       onClick={(e) => {
                           if (value.length > 2) {
                               this.showAllToggle(e);
                           }
                       }}></i>
                </div>
                <div className={`dropdown-select-inner ${hidden ? 'hidden' : 'open'}`}
                     ref="wrapper"
                     style={wrapperStyle}>

                    <div ref="trigger"
                         className="trigger"
                         style={triggerStyle}
                         disabled={disabled}>

                        <input ref="filter"
                               type="text"
                               className="filter"
                               style={filterStyle}
                               value={filter}
                               placeholder={placeholder}
                               onChange={filterChangeHandle}
                               disabled={disabled}
                        />
                    </div>

                    {
                        hidden ?
                            null
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
                                                let itemValue = getValue(item);
                                                return (
                                                    <div key={index}
                                                         className="option"
                                                         style={optionStyle}
                                                         onClick={select.bind(this, item)}>
                                                        <Checkbox label={typeof item == 'object' ? item.text : item}
                                                                  value={itemValue}
                                                        />
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>
                            )
                    }
                </div>
            </div>
        );

    }
};

MultipleSelect.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * The name of the multipleSelect field.
     */
    name: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The options data.
     */
    data: PropTypes.array,

    /**
     * The multipleSelect input value.
     */
    value: PropTypes.array,

    /**
     * The width of the multipleSelect drop-down box.
     */
    width: PropTypes.number,

    /**
     * The placeholder of the multipleSelect.
     */
    placeholder: PropTypes.string,

    /**
     * If true, the multipleSelect will be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * Callback function fired when a menu item is selected.
     */
    onChange: PropTypes.func

};

MultipleSelect.defaultProps = {

    className: '',
    style: null,

    name: '',
    value: [],
    width: 300,
    placeholder: 'select number',
    disabled: false

};
