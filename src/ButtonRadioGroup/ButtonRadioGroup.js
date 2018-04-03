/**
 * @file ButtonRadioGroup component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ButtonRadio from '../ButtonRadio';
import Theme from '../Theme';

import PureRender from '../_vendors/PureRender';
import Util from '../_vendors/Util';

@PureRender
class ButtonRadioGroup extends Component {

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
                value: !!nextProps.value
            });
        }
    }

    render() {

        const {className, style, theme, activatedTheme, name, disabled, data} = this.props,
            {value} = this.state,

            groupClassName = classNames('button-radio-group', {
                [className]: className
            });

        return (
            <div className={groupClassName}
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

                            const isChecked = item.value == value;

                            return (
                                <ButtonRadio key={index}
                                             theme={isChecked ? activatedTheme : theme}
                                             data={item}
                                             disabled={disabled || item.disabled}
                                             isChecked={isChecked}
                                             onTouchTap={this.changeHandler}/>
                            );

                        }
                    )
                }

            </div>
        );

    }
}

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
     * The ButtonCheckbox theme.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * The ButtonCheckbox activated theme.
     */
    activatedTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),

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

    theme: Theme.DEFAULT,
    activatedTheme: Theme.PRIMARY,

    value: '',
    disabled: false

};

export default ButtonRadioGroup;