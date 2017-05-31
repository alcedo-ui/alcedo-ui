import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Event from '../_vendors/Event';

import RaisedButton from '../RaisedButton';
import Tree from '../Tree';

import './TreeSelect.css';

export default class TreeSelect extends Component {

    constructor(props) {

        super(props);

        this.state = {
            hidden: true
        };

        this.toggle = this::this.toggle;
        this.onChangeHandle = this::this.onChangeHandle;

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

    componentWillReceiveProps(nextProps) {
        if (JSON.stringify(nextProps.value) !== JSON.stringify(this.props.value)) {
            this.setState({
                value: nextProps.value
            });
        }
    }

    componentDidMount() {
        this.popupHeight = require('react-dom').findDOMNode(this.refs.popup).offsetHeight;
        this.triggerHeight = require('react-dom').findDOMNode(this.refs.trigger).offsetHeight;
        if (window.addEventListener) {
            window.addEventListener('click', this.toggle);
        } else {
            window.attachEvent('click', this.toggle);
        }
        this.setState({
            value: this.props.value
        });
    }

    componentWillUnmount() {
        if (window.removeEventListener) {
            window.removeEventListener('click', this.toggle);
        } else {
            window.detachEvent('click', this.toggle);
        }
    }

    render() {

        const {data, className, style, name, placeholder, value} = this.props;
        const {hidden} = this.state;
        const {triggerHeight, popupHeight} = this;
        let wrapperStyle;
        if (triggerHeight && popupHeight) {
            wrapperStyle = {
                height: hidden ? triggerHeight : popupHeight + triggerHeight
            };
        }
        let valueStr = '';
        if (value instanceof Array && value.length <= 2) {
            value.map((item, index) => {
                index == 0 ? valueStr += item.text : valueStr += ',' + item.text
            })
        } else {
            valueStr = value[0].text + ' and ' + (value.length - 1) + ' selected'
        }
        return (
            <div ref="TreeSelect"
                 className={`tree-select ${className ? className : ''}`}
                 style={style}>
                {
                    (value instanceof Array ? value : []).map((item, index) => {
                        return (
                            <input key={index}
                                   type="hidden"
                                   name={name + '[' + index + ']'}
                                   value={typeof item == 'object' ? item.id : item}/>
                        );
                    })
                }
                <div className={`tree-select-inner ${hidden ? 'hidden' : 'open'}`}
                     ref="wrapper"
                     style={wrapperStyle}>
                    <RaisedButton ref="trigger"
                                  className={`tree-select-trigger ${value ? '' : 'empty'}`}
                                  value={valueStr || placeholder}
                                  iconCls={`fa fa-angle-down tree-select-trigger-right-icon`}/>

                    <div className="popup"
                         ref="popup">
                        <Tree className="tree-example"
                              data={data}
                              value={value}
                              multiple={true}/>
                    </div>
                </div>
            </div>
        );
    }
};

TreeSelect.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    style: PropTypes.object,
    value: PropTypes.array,
    data: PropTypes.array,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool
};
