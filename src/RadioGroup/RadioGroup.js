/**
 * @file RadioGroup component
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Components
import Radio from '../Radio';

// Statics
import Theme from '../Theme';
import Position from '../_statics/Position';

// Vendors
import classNames from 'classnames';
import Util from '../_vendors/Util';
import ComponentUtil from '../_vendors/ComponentUtil';

class RadioGroup extends Component {

    static Theme = Theme;

    static getDerivedStateFromProps(props, state) {
        return {
            prevProps: props,
            value: ComponentUtil.getDerivedState(props, state, 'value')
        };
    }

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            value: props.value
        };

    }

    handleChange = item => {

        const {valueField, disabled} = this.props;

        this.setState({
            value: item?.[valueField]
        }, () => !disabled && this.props.onChange?.(item?.[valueField]));

    };

    render() {

        const {
                className, style, theme, name,
                valueField, displayField, uncheckedIconCls, checkedIconCls,
                disabled, data, onCheck
            } = this.props,
            {value} = this.state;

        return (
            <div className={classNames('radio-group', {
                [className]: className
            })}
                 style={style}
                 disabled={disabled}>
                {
                    data?.map((item, index) => item ?
                        <Radio key={index}
                               className={item.className || null}
                               style={item.style}
                               uncheckedIconCls={item.uncheckedIconCls || uncheckedIconCls}
                               checkedIconCls={item.checkedIconCls || checkedIconCls}
                               theme={item.theme || theme}
                               name={name}
                               label={item[displayField]}
                               value={item[valueField]}
                               checked={item[valueField] === value}
                               disabled={disabled || item.disabled}
                               tip={item.tip}
                               tipPosition={item.tipPosition}
                               onChange={() => this.handleChange(item)}
                               onCheck={e => onCheck?.(item, e)}/>
                        :
                        null
                    ) || null
                }
            </div>
        );

    }
}

RadioGroup.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The RadioGroup theme.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * The name of Radio.
     */
    name: PropTypes.string,

    /**
     * The data of GroupRadio.
     */
    data: PropTypes.arrayOf(PropTypes.shape({

        /**
         * The CSS class name of Radio component.
         */
        className: PropTypes.string,

        /**
         * Override the styles of Radio component.
         */
        style: PropTypes.object,

        /**
         * The RadioGroup theme.
         */
        theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

        /**
         * The label text of Radio component.
         */
        label: PropTypes.any,

        /**
         * The value of Radio component.
         */
        value: PropTypes.any,

        /**
         * If true,the Radio will be disabled.
         */
        disabled: PropTypes.bool,

        tip: PropTypes.any,
        tipPosition: PropTypes.oneOf(Util.enumerateValue(Position))

    })).isRequired,

    /**
     * The value of RadioGroup component.
     */
    value: PropTypes.any,

    valueField: PropTypes.string,
    displayField: PropTypes.string,

    uncheckedIconCls: PropTypes.string,
    checkedIconCls: PropTypes.string,

    /**
     * If true,the RadioGroup will be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * Callback function fired when the value of RadioGroup changed.
     */
    onChange: PropTypes.func,

    onCheck: PropTypes.func

};

RadioGroup.defaultProps = {

    theme: Theme.DEFAULT,

    data: [],

    valueField: 'value',
    displayField: 'label',

    uncheckedIconCls: 'far fa-circle',
    checkedIconCls: 'fas fa-dot-circle',

    disabled: false

};

export default RadioGroup;
