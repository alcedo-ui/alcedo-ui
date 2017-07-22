/**
 * Created by Wendy on 2017/5/16.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';

import Popup from '../Popup';
import CascaderList from './CascaderList';
import RaisedButton from '../RaisedButton';

import Util from '../_vendors/Util';

import './Cascader.css';

export default class Cascader extends Component {

    constructor(props) {

        super(props);

        this.state = {
            popupVisible: false,
            isAbove: false,
            value: props.value,
            path: []
        };

        this.togglePopup = this::this.togglePopup;
        this.closePopup = this::this.closePopup;
        this.isAbove = this::this.isAbove;
        this.calValue = this::this.calValue;
        this.popupRenderHandle = this::this.popupRenderHandle;
        this.changeHandler = this::this.changeHandler;

    }

    togglePopup() {
        this.setState({
            popupVisible: !this.state.popupVisible
        });
    }

    closePopup() {
        this.setState({
            popupVisible: false
        });
    }

    isAbove() {

        const cascader = this.refs.cascader;

        if (!this.popupHeight || !cascader) {
            return false;
        }

        const {top} = Util.getOffset(cascader),
            scrollTop = Util.getScrollTop();

        if (top + this.triggerHeight + this.popupHeight - scrollTop > window.innerHeight) {
            return true;
        }

        return false;

    }

    calValue(path, props = this.props) {
        const {valueField, displayField, separator} = props;
        return path.map(item => Util.getTextByDisplayField(item.value, displayField, valueField))
            .join(` ${separator} `);
    }

    popupRenderHandle(popupEl) {

        this.popupEl = findDOMNode(popupEl);
        this.popupHeight = this.popupEl.offsetHeight;

        const isAbove = this.isAbove();

        if (isAbove !== this.state.isAbove) {
            this.setState({
                isAbove
            });
        }

    }

    changeHandler(path) {

        const {onChange} = this.props;
        const value = path[path.length - 1].value;

        this.setState({
            path,
            value
        }, () => {
            onChange && onChange(value, path);
        });

    }

    componentDidMount() {
        this.triggerEl = findDOMNode(this.refs.trigger);
        this.triggerHeight = this.triggerEl.clientHeight;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            this.setState({
                value: nextProps.value
            });
        }
    }

    render() {

        const {
                className, style, listWidth, triggerTheme, disabled, valueField, displayField, popupStyle,
                name, popupClassName, data
            } = this.props,

            {value, popupVisible, isAbove, path} = this.state,

            triggerClassName = (popupVisible ? ' activated' : '') + (isAbove ? ' above' : ' blow')
                + (value ? '' : ' empty'),

            popupRenderClassName = (isAbove ? ' above' : ' blow') + (popupClassName ? ' ' + popupClassName : '');

        return (

            <div ref="cascader"
                 className={`cascader ${className}`}
                 style={style}>

                {
                    name ?
                        <input type="hidden"
                               name={name}
                               value={Util.getValueByValueField(value, valueField, displayField)}/>
                        :
                        null
                }

                <RaisedButton ref="trigger"
                              className={'cascader-trigger' + triggerClassName}
                              rightIconCls={`fa fa-angle-${isAbove ? 'up' : 'down'} cascader-trigger-icon`}
                              disabled={disabled}
                              value={this.calValue(path)}
                              theme={triggerTheme}
                              onTouchTap={this.togglePopup}/>

                <Popup ref="popup"
                       className={'cascader-popup' + popupRenderClassName}
                       style={popupStyle}
                       visible={popupVisible}
                       triggerEl={this.triggerEl}
                       hasTriangle={false}
                       position={isAbove ? Popup.Position.TOP_LEFT : Popup.Position.BOTTOM_LEFT}
                       onRender={this.popupRenderHandle}
                       onRequestClose={this.closePopup}>

                    <CascaderList listData={data}
                                  listWidth={listWidth}
                                  path={path}
                                  onChange={this.changeHandler}/>

                </Popup>

            </div>
        );
    }
}

Cascader.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    listWidth: PropTypes.number,

    /**
     * The value field name in data. (default: "value")
     */
    valueField: PropTypes.string,

    /**
     * The display field name in data. (default: "text")
     */
    displayField: PropTypes.string,

    separator: PropTypes.string


};

Cascader.defaultProps = {

    className: '',
    style: null,

    listWidth: 200,

    placeholder: '',
    disabled: false,

    valueField: 'value',
    displayField: 'text',

    separator: '/'


};