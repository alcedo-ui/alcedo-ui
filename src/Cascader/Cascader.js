/**
 * Created by Wendy on 2017/5/16.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';

import Popup from '../Popup';
import List from '../List';
import RaisedButton from '../RaisedButton';

import Util from '../_vendors/Util';

import './Cascader.css';

export default class Cascader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popupVisible: false,
            proviceIndex:null,
            isAbove: false
        };
        this.togglePopup = this::this.togglePopup;
        this.closePopup = this::this.closePopup;
        this.isAbove = this::this.isAbove;
        this.popupRenderHandle = this::this.popupRenderHandle;
        this.itemTouchTapHandle = this::this.itemTouchTapHandle;
        this.changeHandle = this::this.changeHandle;
        this.changeHandle2 = this::this.changeHandle2;
    }

    togglePopup() {
        this.setState({
            popupVisible: !this.state.popupVisible,
            proviceIndex: null
        });
    }

    closePopup() {
        this.setState({
            popupVisible: false,
            proviceIndex: null
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

    itemTouchTapHandle(value) {

        const {autoClose, onItemTouchTap} = this.props;

        onItemTouchTap && onItemTouchTap(value);

        autoClose && this.setState({
            popupVisible: false
        });

    }

    itemTouchTapHandle2(value) {

        alert(JSON.stringify(value))

    }

    changeHandle(value) {

        this.setState({
            value,
            proviceIndex:value.value

        }, () => {
            const {onChange} = this.props;
            onChange && onChange(value);
        });
    }

    changeHandle2(value) {

        this.setState({
            value
        }, () => {
            const {onChange} = this.props;
            onChange && onChange(value);
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
                className, style, triggerTheme, disabled, popupStyle, data, name, popupClassName,placeholder,
                valueField, displayField, descriptionField
            } = this.props,
            {value, popupVisible, isAbove,proviceIndex} = this.state,
            triggerClassName = (popupVisible ? ' activated' : '') + (isAbove ? ' above' : ' blow')
                + (value ? '' : ' empty'),
            triggerValue = value ?
                (

                    value.length > 0 ?
                    value.length + ' selected'
                        :
                        placeholder

                )
                :
                placeholder,

            cascaderPopupClassName = (isAbove ? ' above' : ' blow')
                + (popupClassName ? ' ' + popupClassName : ''),
            cascaderPopupStyle = Object.assign({
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
                       className={'cascader-popup' + cascaderPopupClassName}
                       visible={popupVisible}
                       style={cascaderPopupStyle}
                       hasTriangle={false}
                       triggerEl={this.triggerEl}
                       position={isAbove ? Popup.Position.TOP_LEFT : Popup.Position.BOTTOM_LEFT}
                       onRender={this.popupRenderHandle}
                       onRequestClose={this.closePopup}>

                    <List className="cascader-list"
                          value={value}
                          rightIconCls={true}
                          valueField={valueField}
                          displayField={displayField}
                          items={data}
                          descriptionField={descriptionField}
                          onItemTouchTap={this.itemTouchTapHandle}
                          onChange={this.changeHandle}/>
                </Popup>

                {
                    proviceIndex && data[proviceIndex-1].children ?
                       <Popup ref="popup"
                              className={'cascader-popup cascader-popup-second' + cascaderPopupClassName}
                              visible={true}
                              style={cascaderPopupStyle}
                              hasTriangle={false}
                              triggerEl={this.triggerEl}
                              position={isAbove ? Popup.Position.TOP_LEFT : Popup.Position.BOTTOM_LEFT}
                              onRender={this.popupRenderHandle}
                              onRequestClose={this.closePopup}>

                           <List className="cascader-list"
                                 value={value}
                                 rightIconCls={true}
                                 valueField={valueField}
                                 displayField={displayField}
                                 items={data[proviceIndex-1].children}
                                 descriptionField={descriptionField}
                                 onItemTouchTap={this.itemTouchTapHandle2}
                                 onChange={this.changeHandle2}/>
                       </Popup>
                       :
                       null

                }





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