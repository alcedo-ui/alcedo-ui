/**
 * @file MaterialAutoCompleteFilter component
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import AutoCompleteFilter from '../AutoCompleteFilter';
import MaterialFieldSeparator from '../_MaterialFieldSeparator';

import Theme from '../Theme';
import Position from '../_statics/Position';

import Util from '../_vendors/Util';
import ComponentUtil from '../_vendors/ComponentUtil';

class MaterialAutoCompleteFilter extends Component {

    static Theme = Theme;
    static Position = Position;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.autoComplete = createRef();

        this.state = {
            value: props.value,
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

        if (this.state.filter === '') {
            this.setState({
                isFocus: false
            });
        }

        const {onBlur} = this.props;
        onBlur && onBlur(...args);

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
        this.autoCompleteInstance && this.autoCompleteInstance.closePopup();
    };

    componentDidMount() {
        this.autoCompleteInstance = this.autoComplete && this.autoComplete.current;
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
            {isFocus, isHover, value, filter} = this.state;

        return (
            <div className={classNames('material-auto-complete-filter', {
                animated: isLabelAnimated,
                'has-label': label,
                'has-value': filter,
                focused: isFocus,
                [className]: className
            })}
                 style={style}>

                {
                    label ?
                        <div className="material-auto-complete-filter-label">
                            {label}
                        </div>
                        :
                        null
                }

                <AutoCompleteFilter {...restProps}
                                    ref={this.autoComplete}
                                    popupClassName={classNames('material-auto-complete-filter-popup', {
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

MaterialAutoCompleteFilter.propTypes = {

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

    /**
     * Override the styles of the popup element.
     */
    popupStyle: PropTypes.object,

    /**
     * The theme.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    position: PropTypes.oneOf(Util.enumerateValue(Position)),

    /**
     * The name of the auto complete.
     */
    name: PropTypes.string,

    /**
     * The placeholder of the field.
     */
    placeholder: PropTypes.string,

    label: PropTypes.any,

    /**
     * Children passed into the List.
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
            itemRenderer: PropTypes.func,

            /**
             * Callback function fired when a list item touch-tapped.
             */
            onClick: PropTypes.func

        }), PropTypes.string, PropTypes.number])),

        // grouped
        PropTypes.array

    ]).isRequired,

    /**
     * If true, the auto complete will be disabled.
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
     * The description field name in data. (default: "desc")
     */
    descriptionField: PropTypes.string,

    /**
     * If true, the popup list automatically closed after selection.
     */
    autoClose: PropTypes.bool,

    minFilterLength: PropTypes.number,

    /**
     * Callback function fired when filter changed.
     */
    filterCallback: PropTypes.func,

    /**
     * Use this property to display an icon.
     */
    iconCls: PropTypes.string,

    /**
     * Use this property to display an icon.
     */
    rightIconCls: PropTypes.string,

    /**
     * The visiblity of no matched popup.
     */
    noMatchedPopupVisible: PropTypes.bool,

    /**
     * The message of no matched value.
     */
    noMatchedMsg: PropTypes.string,

    /**
     * If true,the list data will be grouped.
     */
    isGrouped: PropTypes.bool,

    isLabelAnimated: PropTypes.bool,
    filterInitValue: PropTypes.string,
    value: PropTypes.any,
    popupChildren: PropTypes.any,

    /**
     * You can create a complicated renderer callback instead of value and desc prop.
     */
    renderer: PropTypes.func,

    /**
     * The function that trigger when filter changes.
     */
    onFilterChange: PropTypes.func,

    /**
     * The function that trigger when press enter.
     */
    onFilterPressEnter: PropTypes.func,

    /**
     * The function that trigger when filter cleared.
     */
    onFilterClear: PropTypes.func,

    /**
     * The function that trigger when value changed.
     */
    onChange: PropTypes.func,

    /**
     * The function that trigger when touch-tap the list items.
     */
    onItemClick: PropTypes.func,

    /**
     * Callback function fired when AutoCompleteFilter get focus.
     */
    onFocus: PropTypes.func,

    /**
     * Callback function fired when AutoCompleteFilter lose focus.
     */
    onBlur: PropTypes.func,

    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func

};

MaterialAutoCompleteFilter.defaultProps = {

    theme: Theme.DEFAULT,

    name: '',
    placeholder: '',
    label: '',
    isLabelAnimated: true,
    data: [],
    disabled: false,
    valueField: 'value',
    displayField: 'text',
    descriptionField: 'desc',
    autoClose: false,
    minFilterLength: 1,
    iconCls: '',
    rightIconCls: 'fas fa-search',
    noMatchedPopupVisible: true,
    noMatchedMsg: '',
    isGrouped: false,
    filterInitValue: ''

};

export default MaterialAutoCompleteFilter;
