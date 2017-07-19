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
            isAbove: false
        };
        this.togglePopup = this::this.togglePopup;
        this.closePopup = this::this.closePopup;
        this.isAbove = this::this.isAbove;
        this.popupRenderHandle = this::this.popupRenderHandle;
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
                className, style, triggerTheme, disabled, valueField, displayField, popupStyle,
                name, popupClassName, placeholder,data
            } = this.props,

            {value, popupVisible, isAbove} = this.state,
            triggerClassName = (popupVisible ? ' activated' : '') + (isAbove ? ' above' : ' blow')
                + (value ? '' : ' empty'),
            triggerValue = value ?
                (

                    Util.getTextByDisplayField(value, displayField, valueField)

                )
                :
                placeholder,
            popupRenderClassName = (isAbove ? ' above' : ' blow')
                + (popupClassName ? ' ' + popupClassName : ''),
            popupRenderStyle = Object.assign({
                width: this.triggerEl && getComputedStyle(this.triggerEl).width
            }, popupStyle);


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
                              value={triggerValue}
                              theme={triggerTheme}
                              onTouchTap={this.togglePopup}/>

                <Popup ref="popup"
                       visible={popupVisible}
                       style={popupRenderStyle}
                       className={`cascader-popup ${popupRenderClassName}`}
                       triggerEl={this.triggerEl}
                       hasTriangle={false}
                       position={isAbove ? Popup.Position.TOP_LEFT : Popup.Position.BOTTOM_LEFT}
                       onRender={this.popupRenderHandle}
                       onRequestClose={this.closePopup}>

                    <CascaderList className={`cascader-list`}
                                  value={value}
                                  listData={data}/>

                </Popup>

            </div>
        )
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

    /**
     * The placeholder of Cascader.
     */
    placeholder: PropTypes.string,

    /**
     * If true,the Cascader will be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * If true,the Cascader options box will be show.
     */
};

Cascader.defaultProps = {

    className: '',
    style: null,

    placeholder: '',
    disabled: false,
    optionsVisible: false


};