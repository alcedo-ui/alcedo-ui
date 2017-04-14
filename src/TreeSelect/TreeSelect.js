import React, {Component, PropTypes} from 'react';

import Util from '../_vendors/Util';
import Event from '../_vendors/Event';

import FieldMsg from '../FieldMsg';

import RaisedButton from '../RaisedButton';
import TreeNode from './TreeNode';

import './TreeSelect.css';

export default class TreeSelect extends Component {

    constructor(props) {

        super(props);

        this.state = {
            hidden: true,
            filter: '',
            infoMsgHidden: true,
            errorMsgHidden: true,
            showAll: false,
            value:this.props.value
        };

        this.list = [];
        this.filterList = [];
        this.optionHeight = 40;
        this.maxOptionsHeight = 200;

        this.toggle = this::this.toggle;
        this.onChangeHandle = this::this.onChangeHandle;
        this.filterChangeHandle = this::this.filterChangeHandle;
        this.showInfo = this::this.showInfo;
        this.hideInfo = this::this.hideInfo;
        this.showError = this::this.showError;
        this.hideError = this::this.hideError;

    }

    toggle(e) {
        !this.props.disabled && this.setState({
            hidden: Event.triggerPopupEventHandle(
                e.target,
                require('react-dom').findDOMNode(this.refs.trigger),
                this.refs.options,
                this.state.hidden
            )
        });
    }

    onChangeHandle(item) {
        this.setState({
            filter: ''
        }, () => {
            this.props.onChange && this.props.onChange(item);
        });
    }

    filterChangeHandle(e) {
        this.setState({
            filter: e.target.value
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

    filterListLength (list){
        let length =0;
        for(let i = 0 ;i <list.length ;i++){
            if(list[i].children){
                length += list[i].children.length
                this.filterListLength(list[i].children)
            }
        }
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

    componentWillReceiveProps(nextProps) {
        if (JSON.stringify(nextProps.value) !== JSON.stringify(this.props.value)) {
            this.setState({
                value:nextProps.value
            });
        }
    }

    componentDidMount() {
        this.triggerHeight = require('react-dom').findDOMNode(this.refs.trigger).offsetHeight;
        this.filterHeight = require('react-dom').findDOMNode(this.refs.filter).offsetHeight;

        if (window.addEventListener) {
            window.addEventListener('click', this.toggle);
        } else {
            window.attachEvent('click', this.toggle);
        }
        this.setState({
            value:this.props.value
        })
    }

    componentWillUnmount() {
        if (window.removeEventListener) {
            window.removeEventListener('click', this.toggle);
        } else {
            window.detachEvent('click', this.toggle);
        }
    }

    render() {

        const {data, width, className, style, name, invalidMsg,  placeholder, disabled, infoMsg} = this.props;
        const {hidden, filter, infoMsgHidden, errorMsgHidden, showAll,value} = this.state;
        const {
            optionHeight, maxOptionsHeight, deselect, select, filterChangeHandle,
            getRestList, getFilterList, showInfo, hideInfo, showError, triggerHeight,filterHeight
        } = this;
        this.list = getRestList(data, value);

        this.filterList = getFilterList(this.list, filter);

        let componentWidth = width || '100%';

        const emptyOptionsStyle = {
            width: componentWidth,
            height: hidden ? 0 : optionHeight,
            maxHeight: maxOptionsHeight,
            padding:0,
            overflow:'inherit'
        };

        const optionsStyle = {
            width: componentWidth,
            height: hidden ? 0 : this.filterList.length * optionHeight,
            top:optionHeight
        };

        const optionStyle = {
            height: optionHeight,
            lineHeight: optionHeight + 'px'
        };
        let optionsHeight = optionsStyle.height ? optionsStyle.height : optionHeight ;
        const popupStyle={
            height: hidden ? 0 : optionsHeight + filterHeight
        }

        const wrapperStyle = {
            height: hidden ? triggerHeight : popupStyle.height + triggerHeight,
        }
        return (
            <div ref="TreeSelect"
                 className={`tree-select ${className ? className : ''}`}
                 style={style}>
                <input type="hidden"
                       name={name}
                       value={typeof value == 'object' ? value.value : item}/>

                <div className={`tree-select-inner ${hidden ? 'hidden' : 'open'}`}
                     ref="wrapper"
                     style={wrapperStyle}
                     >
                    <RaisedButton ref="trigger"
                                  className={`tree-select-trigger ${value ? '' : 'empty'}`}
                                  value={(typeof value === 'object' ? value.text : value) || placeholder}
                                  iconCls={`fa fa-angle-down tree-select-trigger-right-icon`}/>

                    <div className="popup"
                         style={popupStyle}
                        >
                        <input ref="filter"
                               type="text"
                               className="filter"
                               value={filter}
                               placeholder={placeholder}
                               onChange={filterChangeHandle}
                               disabled={disabled}
                               onMouseOver={showInfo}
                               onMouseOut={hideInfo}/>
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
                                                    return (
                                                        <TreeNode key={index}
                                                                  node={item}
                                                                  className="option"
                                                                  style={optionStyle}
                                                                  value={value}
                                                                  selectedHandle={(value)=>{
                                                                      this.onChangeHandle(value)
                                                                  }}/>
                                                    );
                                                })
                                            }
                                        </div>
                                )
                        }
                    </div>
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

TreeSelect.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    style: PropTypes.object,
    value: PropTypes.object || PropTypes.string,
    data: PropTypes.array,
    onChange: PropTypes.func,
    width: PropTypes.number,
    invalidMsg: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    infoMsg: PropTypes.string
};
