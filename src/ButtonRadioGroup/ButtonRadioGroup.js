/**
 * @file ButtonRadioGroup component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import RaisedButton from '../RaisedButton';

export default class ButtonRadioGroup extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            value: props.value
        };

        this.changeHandle = ::this.changeHandle;

    }

    changeHandle(item) {
        this.setState({
            value: item.value
        }, () => {
            !this.props.disabled && this.props.onChange && this.props.onChange(item.value);
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.state.value) {
            this.setState({
                value: !!nextProps.value
            });
        }
    }

    render() {

        const {className, style, name, disabled, data} = this.props;
        const {value} = this.state;

        return (
            <div className={`button-radio-group ${className}`}
                 style={style}
                 disabled={disabled}>

                {
                    name ?
                        <input type="hidden"
                               name={name}
                               value={value}/>
                        :
                        null
                }

                {
                    data.map((item, index) => {

                        const isChecked = item.value === value,
                            className = (isChecked ? ' activated' : '') + (item.className ? ' ' + item.className : '');

                        return (
                            <RaisedButton key={index}
                                          className={'button-radio-group-item' + className}
                                          style={item.style}
                                          value={item.label}
                                          disabled={disabled || item.disabled}
                                          onTouchTap={() => {
                                              this.changeHandle(item);
                                          }}/>
                        );

                    })
                }

            </div>
        );

    }
};

ButtonRadioGroup.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The hidden input name for form submit.
     */
    name: PropTypes.string,

    /**
     * Data for ButtonRadioGroup.
     */
    data: PropTypes.arrayOf(PropTypes.shape({

        /**
         * The className of RaisedButton.
         */
        className: PropTypes.string,

        /**
         * The style of RaisedButton.
         */
        style: PropTypes.object,

        /**
         * The label of RaisedButton.
         */
        label: PropTypes.any,

        /**
         * The value of RaisedButton.
         */
        value: PropTypes.any,

        /**
         * If true, the RaisedButton will be disabled.
         */
        disabled: PropTypes.bool

    })).isRequired,

    /**
     * Set one of the button activation.
     */
    value: PropTypes.any,

    /**
     * If true, the ButtonRadioGroup will be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * Callback function fired when click RaisedButton.
     */
    onChange: PropTypes.func

};

ButtonRadioGroup.defaultProps = {

    className: '',
    style: null,

    name: '',
    data: [],
    value: '',
    disabled: false

};