/**
 * @file RadioGroup component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Radio from '../Radio';

import Theme from '../Theme';
import Position from '../_statics/Position';

import Util from '../_vendors/Util';

class RadioGroup extends Component {

    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            value: props.value
        };

    }

    handleChange = item => {
        this.setState({
            value: item.value
        }, () => {
            !this.props.disabled && this.props.onChange && this.props.onChange(item.value);
        });
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.state.value) {
            this.setState({
                value: nextProps.value
            });
        }
    }

    render() {

        const {
                className, style, theme, name, uncheckedIconCls, checkedIconCls,
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
                    data && data.map((item, index) =>
                        <Radio key={index}
                               className={item.className ? item.className : ''}
                               style={item.style}
                               uncheckedIconCls={item.uncheckedIconCls || uncheckedIconCls}
                               checkedIconCls={item.checkedIconCls || checkedIconCls}
                               theme={item.theme || theme}
                               name={name}
                               label={item.label}
                               value={item.value}
                               checked={item.value === value}
                               disabled={disabled || item.disabled}
                               tip={item.tip}
                               tipPosition={item.tipPosition}
                               onChange={() => this.handleChange(item)}
                               onCheck={e => onCheck && onCheck(item, e)}/>
                    )
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

    name: '',
    data: [],
    uncheckedIconCls: 'far fa-circle',
    checkedIconCls: 'fas fa-dot-circle',
    disabled: false

};

export default RadioGroup;
