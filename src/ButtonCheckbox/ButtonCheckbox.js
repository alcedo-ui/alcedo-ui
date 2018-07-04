/**
 * @file ButtonCheckbox component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import RaisedButton from '../RaisedButton';
import Theme from '../Theme';

import Util from '../_vendors/Util';
import ComponentUtil from '../_vendors/ComponentUtil';

class ButtonCheckbox extends Component {

    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            value: !!props.value
        };

    }

    clickHandler = () => {
        const value = !this.state.value;
        this.setState({
            value
        }, () => {
            !this.props.disabled && this.props.onChange && this.props.onChange(value);
        });
    };

    static getDerivedStateFromProps(props, state) {
        return {
            prevProps: props,
            value: ComponentUtil.getDerivedState(props, state, 'value')
        };
    }

    render() {

        const {

                className, theme, activatedTheme, text,

                ...restProps

            } = this.props,
            {value} = this.state,

            buttonClassName = classNames('button-checkbox', {
                activated: value,
                [className]: className
            });

        return (
            <RaisedButton {...restProps}
                          className={buttonClassName}
                          value={text}
                          isRounded={true}
                          theme={value ? activatedTheme : theme}
                          onClick={this.clickHandler}/>
        );

    }
}

ButtonCheckbox.propTypes = {

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
     * The title of the ButtonCheckbox.
     */
    title: PropTypes.string,

    /**
     * The text of the button.
     */
    text: PropTypes.string,

    /**
     * If true,the button will be in active status.
     */
    value: PropTypes.bool,

    /**
     * Disables the button if set to true.
     */
    disabled: PropTypes.bool,

    /**
     * Callback function fired when the button is touch-tapped.
     */
    onChange: PropTypes.func

};

ButtonCheckbox.defaultProps = {

    theme: Theme.DEFAULT,
    activatedTheme: Theme.PRIMARY,

    value: false,
    disabled: false

};

export default ButtonCheckbox;