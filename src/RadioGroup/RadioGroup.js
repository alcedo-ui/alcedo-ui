/**
 * @file RadioGroup component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Radio from '../Radio';
import Theme from '../Theme';

import Util from '../_vendors/Util';

export default class RadioGroup extends Component {

    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            value: props.value
        };

        this.changeHandler = ::this.changeHandler;

    }

    changeHandler(item) {
        this.setState({
            value: item.value
        }, () => {
            !this.props.disabled && this.props.onChange && this.props.onChange(item.value);
        });
    }

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
                disabled, data, tip, tipPosition
            } = this.props,
            {value} = this.state;

        return (
            <div className={'radio-group' + (className ? ' ' + className : '')}
                 style={style}
                 disabled={disabled}>

                {
                    data.map((item, index) => {

                        const isChecked = item.value === value;

                        return (
                            <Radio key={index}
                                   className={item.className ? item.className : ''}
                                   style={item.style}
                                   uncheckedIconCls={item.uncheckedIconCls || uncheckedIconCls}
                                   checkedIconCls={item.checkedIconCls || checkedIconCls}
                                   theme={item.theme || theme}
                                   name={name}
                                   label={item.label}
                                   value={item.value}
                                   checked={isChecked}
                                   disabled={disabled}
                                   tip={tip ? tip : item.label}
                                   tipPosition={tipPosition}
                                   onChange={() => {
                                       this.changeHandler(item);
                                   }}/>
                        );

                    })
                }

            </div>
        );

    }
};

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
        value: PropTypes.any

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
    onChange: PropTypes.func

};

RadioGroup.defaultProps = {

    className: '',
    style: null,
    theme: Theme.DEFAULT,

    name: '',
    data: [],
    value: null,
    uncheckedIconCls: 'fa fa-circle-o',
    checkedIconCls: 'fa fa-dot-circle-o',
    disabled: false

};