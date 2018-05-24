/**
 * @file CascaderField component
 * @author wendy(wendy.wei@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';
import classNames from 'classnames';

import Popup from '../Popup';
import CascaderList from '../CascaderList/CascaderList';
import RaisedButton from '../RaisedButton';
import Theme from '../Theme';

import Util from '../_vendors/Util';
import TreeCalculation from '../_vendors/TreeCalculation';
import DropdownCalculation from '../_vendors/DropdownCalculation';

class CascaderField extends Component {

    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            popupVisible: false,
            isAbove: false,
            value: props.value,
            displayValue: this.calDisplayValue(TreeCalculation.calPath(props.value, {children: props.data}, props))
        };

        this.togglePopup = ::this.togglePopup;
        this.closePopup = ::this.closePopup;
        this.calDisplayValue = ::this.calDisplayValue;
        this.popupRenderHandle = ::this.popupRenderHandle;
        this.changeHandler = ::this.changeHandler;

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

    calDisplayValue(path, props = this.props) {

        if (!path || path.length < 1) {
            return;
        }

        const {valueField, displayField, separator} = props;
        return path.map(item => Util.getTextByDisplayField(item.node, displayField, valueField))
        .join(` ${separator} `);

    }

    popupRenderHandle(popupEl) {

        const isAbove = DropdownCalculation.isAbove(this.cascaderFieldEl, this.triggerEl, findDOMNode(popupEl));

        if (isAbove !== this.state.isAbove) {
            this.setState({
                isAbove
            });
        }

    }

    changeHandler(value, path) {

        this.setState({
            value,
            displayValue: this.calDisplayValue(path)
        }, () => {
            const {onChange} = this.props;
            onChange && onChange(value, path);
        });

    }

    componentDidMount() {
        this.cascaderFieldEl = this.refs.cascaderField;
        this.triggerEl = findDOMNode(this.refs.trigger);
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
                className, style, popupClassName, popupStyle, listWidth, theme,
                disabled, valueField, displayField, name, data, placeholder
            } = this.props,

            {value, popupVisible, isAbove, displayValue} = this.state,

            triggerClassName = classNames('cascader-trigger', isAbove ? 'above' : 'blow', {
                activated: popupVisible,
                empty: !value
            }),
            popupRenderClassName = classNames('cascader-popup', isAbove ? 'above' : 'blow', {
                [popupClassName]: popupClassName
            });

        return (

            <div ref="cascaderField"
                 className={`cascader-field ${className}`}
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
                              className={triggerClassName}
                              rightIconCls={`fas fa-angle-${isAbove ? 'up' : 'down'} cascader-trigger-icon`}
                              disabled={disabled}
                              value={displayValue || placeholder}
                              theme={theme}
                              onClick={this.togglePopup}/>

                <Popup ref="popup"
                       className={popupRenderClassName}
                       style={popupStyle}
                       visible={popupVisible}
                       triggerEl={this.triggerEl}
                       hasTriangle={false}
                       position={isAbove ? Popup.Position.TOP_LEFT : Popup.Position.BOTTOM_LEFT}
                       onRender={this.popupRenderHandle}
                       onRequestClose={this.closePopup}>

                    <CascaderList data={data}
                                  value={value}
                                  listWidth={listWidth}
                                  valueField={valueField}
                                  displayField={displayField}
                                  onChange={this.changeHandler}/>
                </Popup>

            </div>
        );
    }
}

CascaderField.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The className of popup container.
     */
    popupClassName: PropTypes.string,

    /**
     * Override the styles of the popup container.
     */
    popupStyle: PropTypes.object,

    /**
     * The width of cascader list-item.
     */
    listWidth: PropTypes.number,

    /**
     * The theme of button.Can be primary,highlight,success,warning,error.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * The name of the hidden input.
     */
    name: PropTypes.string,

    /**
     * The cascader list data.
     */
    data: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape({

        /**
         * The CSS class name of the list button.
         */
        className: PropTypes.string,

        /**
         * Override the styles of the list button.
         */
        style: PropTypes.object,

        /**
         * The theme of the list button.
         */
        theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

        /**
         * The text value of the list button.Type can be string or number.
         */
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

        /**
         * The desc value of the list button. Type can be string or number.
         */
        desc: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

        /**
         * If true, the list button will be disabled.
         */
        disabled: PropTypes.bool,

        /**
         * If true,the button will be have loading effect.
         */
        isLoading: PropTypes.bool,

        /**
         * If true,the element's ripple effect will be disabled.
         */
        disableTouchRipple: PropTypes.bool,

        /**
         * Use this property to display an icon. It will display on the left.
         */
        iconCls: PropTypes.string,

        /**
         * Use this property to display an icon. It will display on the right.
         */
        rightIconCls: PropTypes.string,

        /**
         * You can create a complicated renderer callback instead of value and desc prop.
         */
        renderer: PropTypes.func,

        /**
         * The children of list-item.
         */
        children: PropTypes.array,

        /**
         * Callback function fired when a list item touch-tapped.
         */
        onClick: PropTypes.func

    }), PropTypes.string, PropTypes.number])),

    /**
     * The placeholder of CascaderField field.
     */
    placeholder: PropTypes.string,

    /**
     * If true,the cascader will be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * The value field name in data. (default: "value")
     */
    valueField: PropTypes.string,

    /**
     * The display field name in data. (default: "text")
     */
    displayField: PropTypes.string,

    /**
     * The connector of cascader value.
     */
    separator: PropTypes.string

};

CascaderField.defaultProps = {

    popupClassName: '',
    listWidth: 200,
    theme: Theme.DEFAULT,

    name: '',
    data: [],
    placeholder: 'Please select ...',
    disabled: false,

    valueField: 'value',
    displayField: 'text',

    separator: '/'

};

export default CascaderField;