/**
 * @file MaterialEditableSelect component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import EditableSelect from '../EditableSelect';
import MaterialFieldSeparator from '../_MaterialFieldSeparator';

import Theme from '../Theme';
import Position from '../_statics/Position';

import Util from '../_vendors/Util';
import ComponentUtil from '../_vendors/ComponentUtil';

class MaterialEditableSelect extends Component {

    static Theme = Theme;
    static Position = Position;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.editableSelect = createRef();
        this.editableSelectInstance = null;

        this.state = {
            value: '',
            filter: props.filterInitValue,
            isFocus: false,
            isHover: false
        };

    }

    handleTriggerFocus = (...args) => {
        this.setState({
            isFocus: true
        }, () => {
            const {onFocus} = this.props;
            onFocus && onFocus(...args);
        });
    };

    handleTriggerBlur = (...args) => {
        this.setState({
            isFocus: false
        }, () => {
            const {onBlur} = this.props;
            onBlur && onBlur(...args);
        });
    };

    handlePopupClosed = () => {
        this.setState({
            isFocus: false
        });
    };

    handleTriggerFilterChange = filter => {
        this.setState({
            filter
        }, () => {
            const {onFilterChange} = this.props;
            onFilterChange && onFilterChange(filter);
        });
    };

    handleTriggerChange = value => {
        this.setState({
            value
        }, () => {
            const {onChange} = this.props;
            onChange && onChange(value);
        });
    };

    handleTriggerMouseOver = (...args) => {
        this.setState({
            isHover: true
        }, () => {
            const {onMouseOver} = this.props;
            onMouseOver && onMouseOver(...args);
        });
    };

    handleTriggerMouseOut = (...args) => {
        this.setState({
            isHover: false
        }, () => {
            const {onMouseOut} = this.props;
            onMouseOut && onMouseOut(...args);
        });
    };

    closePopup = () => {
        this.editableSelectInstance && this.editableSelectInstance.closePopup();
    };

    componentDidMount() {

        this.editableSelectInstance = this.editableSelect && this.editableSelect.current;

        this.setState({
            value: this.props.value
        });

    }

    static getDerivedStateFromProps(props, state) {
        return {
            prevProps: props,
            value: ComponentUtil.getDerivedState(props, state, 'value')
        };
    }

    render() {

        const {
                className, style, theme, label, isLabelAnimated, popupClassName,
                ...restProps
            } = this.props,
            {isFocus, isHover, value} = this.state;

        return (
            <div className={classNames('material-editable-select', {
                animated: isLabelAnimated,
                'has-label': label,
                'has-value': value,
                focused: isFocus,
                [className]: className
            })}
                 style={style}>

                {
                    label ?
                        <div className="material-editable-select-label">
                            {label}
                        </div>
                        :
                        null
                }

                <EditableSelect {...restProps}
                                ref={this.editableSelect}
                                popupClassName={classNames('material-editable-select-popup', {
                                    [popupClassName]: popupClassName
                                })}
                                theme={theme}
                                value={value}
                                onFocus={this.handleTriggerFocus}
                                onBlur={this.handleTriggerBlur}
                                onPopupClosed={this.handlePopupClosed}
                                onMouseOver={this.handleTriggerMouseOver}
                                onMouseOut={this.handleTriggerMouseOut}
                                onFilterChange={this.handleTriggerFilterChange}
                                onChange={this.handleTriggerChange}/>

                <MaterialFieldSeparator theme={theme}
                                        isHover={isHover}
                                        isFocus={isFocus}/>

            </div>
        );

    }
}

MaterialEditableSelect.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * The CSS class name of the popup element.
     */
    popupClassName: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    rightIconCls: PropTypes.string,

    /**
     * Override the styles of the popup element.
     */
    popupStyle: PropTypes.object,

    position: PropTypes.oneOf(Util.enumerateValue(Position)),

    /**
     * The label of the text field.
     */
    label: PropTypes.any,

    /**
     * The animate of the text field.
     */
    isLabelAnimated: PropTypes.bool,

    /**
     * The name of the editableSelect.
     */
    name: PropTypes.string,

    /**
     * The value of the editableSelect.
     */
    value: PropTypes.any,

    /**
     * You can create a complicated renderer callback instead of value and desc prop.
     */
    renderer: PropTypes.func,

    /**
     * The placeholder of the editableSelect.
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
            onClick: PropTypes.func

        }), PropTypes.string, PropTypes.number])),

        // grouped
        PropTypes.array

    ]).isRequired,

    /**
     * The invalid message of editableSelect.
     */
    invalidMsg: PropTypes.string,

    /**
     * If true,the editableSelect will be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * The value field name in data. (default: "value")
     */
    valueField: PropTypes.string,

    /**
     * The description field name in data. (default: "desc")
     */
    descriptionField: PropTypes.string,

    /**
     * The message of the editableSelect.
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
     * The theme of editableSelect.Can be primary,highlight,success,warning,error.
     */
    triggerTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * If true,the drop-down box will be have group selection.
     */
    isGrouped: PropTypes.bool,

    filterInitValue: PropTypes.string,

    /**
     * Callback function fired when the button is touch-tapped.
     */
    onItemClick: PropTypes.func,

    /**
     * Callback function fired when a menu item is selected.
     */
    onChange: PropTypes.func,

    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onFilterChange: PropTypes.func,
    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func

};

MaterialEditableSelect.defaultProps = {

    name: '',
    value: '',
    isLabelAnimated: true,
    placeholder: 'Please select ...',
    data: [],
    invalidMsg: '',
    disabled: false,

    valueField: 'value',
    displayField: 'text',
    descriptionField: 'desc',

    infoMsg: '',
    autoClose: true,
    useFilter: false,
    noMatchedMsg: '',
    triggerTheme: Theme.DEFAULT,
    isGrouped: false

};

export default MaterialEditableSelect;
