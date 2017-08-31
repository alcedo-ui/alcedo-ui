import React, {Component} from 'react';
import PropTypes from 'prop-types';

import DropdownSelect from '../DropdownSelect';
import Util from '../_vendors/Util';
import Theme from '../Theme';

import './MaterialDropdownSelect.css';

export default class MaterialDropdownSelect extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value,
            isFocus: false
        };

        this.onTapHandle = this::this.onTapHandle;
        this.onChangeHandle = this::this.onChangeHandle;

    }


    onTapHandle(bool) {
        this.setState({
            isFocus: bool
        })
    }

    onChangeHandle(value) {
        this.setState({
            value,
            isFocus:false
        }, ()=> {
            this.props.onChange && this.props.onChange(value);
        })
    }

    render() {

        const {className, label, style, isLabelAnimate} = this.props;
        const {isFocus, value} = this.state;

        return (
            <div className={`material-drop-down-select ${className ? className : ''}  ${isFocus ? 'focused' : ''} ${isLabelAnimate ? 'animation' : ''}`}
                 style={style}>
                <div className={`material-drop-down-select-label ${value ? 'hasValue' : ''}`}>{label}</div>
                <DropdownSelect {...this.props}
                                disableTouchRipple={true}
                                onChange={this.onChangeHandle}
                                onClosePopup={this.onTapHandle}
                                onTriggerTouchTap={this.onTapHandle}/>
            </div>
        );

    }
};

MaterialDropdownSelect.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * The class name of the popup element.
     */
    popupClassName: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * Override the styles of the popup element.
     */
    popupStyle: PropTypes.object,

    /**
     * The name of the materialDropDownSelect.
     */
    name: PropTypes.string,

    /**
     * The value of the materialDropDownSelect.
     */
    value: PropTypes.any,

    /**
     * The label of the materialDropDownSelect.
     */
    label:PropTypes.string,

    /**
     * If true, the trigger button has animation when focused.
     */
    isLabelAnimate:PropTypes.bool,

    /**
     * The placeholder of the materialDropDownSelect.
     */
    placeholder: PropTypes.string,

    /**
     * The options data.
     */
    data: PropTypes.oneOfType([

        // not grouped
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape({

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
             * Callback function fired when a list item touch-tapped.
             */
            onTouchTap: PropTypes.func

        }), PropTypes.string, PropTypes.number])),

        // grouped
        PropTypes.array

    ]).isRequired,

    /**
     * The invalid message of materialDropDownSelect.
     */
    invalidMsg: PropTypes.string,

    /**
     * If true,the dropDownSelect will be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * If true,the dropDownSelect will be multiply select.
     */
    multi: PropTypes.bool,

    /**
     * The value field name in data. (default: "value")
     */
    valueField: PropTypes.string,

    /**
     * The display field name in data. (default: "text")
     */
    displayField: PropTypes.string,

    /**
     * The description field name in data. (default: "desc")
     */
    descriptionField: PropTypes.string,

    /**
     * The message of the materialDropDownSelect.
     */
    infoMsg: PropTypes.string,

    /**
     * Use this function to format the options's text.
     */
    textFormat: PropTypes.func,

    /**
     * If true,the drop-down box automatically closed after selection.
     */
    autoClose: PropTypes.bool,

    /**
     * If true,the drop-down box will have search input.
     */
    useFilter: PropTypes.bool,

    /**
     * The message of no matching option.
     */
    noMatchedMsg: PropTypes.string,

    /**
     * The theme of DropdownSelect.Can be primary,highlight,success,warning,error.
     */
    triggerTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * If true,the drop-down box will be have group selection.
     */
    isGrouped: PropTypes.bool,

    /**
     * Callback function fired when the button is touch-tapped.
     */
    onItemTouchTap: PropTypes.func,

    /**
     * Callback function fired when the popup is closed.
     */
    onClosePopup: PropTypes.func,

    /**
     * Callback function fired when a menu item is selected.
     */
    onChange: PropTypes.func

};

MaterialDropdownSelect.defaultProps = {
    value:'',
    label:'label',
    isLabelAnimate:true
};

