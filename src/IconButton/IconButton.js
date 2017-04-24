import React, {Component} from 'react';
import PropTypes from 'prop-types';

import BaseButton from '../_BaseButton';

import './IconButton.css';

export default class IconButton extends Component {

    constructor(props) {

        super(props);

        this.startRipple = this::this.startRipple;
        this.endRipple = this::this.endRipple;

    }

    startRipple(e) {
        this.refs.baseButton.startRipple(e);
    }

    endRipple() {
        this.refs.baseButton.endRipple();
    }

    render() {

        const {children, className, isCircular} = this.props;

        return (
            <BaseButton {...this.props}
                        ref="baseButton"
                        className={`icon-button ${className}`}
                        isCircular={isCircular}
                        rippleDisplayCenter={true}>
                {children}
            </BaseButton>
        );

    }
};

IconButton.propTypes = {

    /**
     * The css class name of the root element.
     */
    className: PropTypes.string,

    /**
     * The styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The button theme.
     */
    theme: PropTypes.string,

    /**
     * Whether need rounded corners.
     */
    isRounded: PropTypes.bool,

    /**
     * Round button.
     */
    isCircular: PropTypes.bool,

    /**
     * The button text value.
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *
     */
    type: PropTypes.string,

    /**
     * Button disabled.
     */
    disabled: PropTypes.bool,

    /**
     *
     */
    isLoading: PropTypes.bool,

    /**
     *
     */
    disableTouchRipple: PropTypes.bool,

    /**
     * Button left icon className.
     */
    iconCls: PropTypes.string,


    /**
     * Button right icon className.
     */
    rightIconCls: PropTypes.string,

    /**
     * Ripple effect is centered.
     */
    rippleDisplayCenter: PropTypes.bool,

    /**
     * The function that trigger when the button is clicked.
     */
    onTouchTap: PropTypes.func

};

IconButton.defaultProps = {

    className: '',
    style: null,

    theme: '',
    isRounded: false,
    isCircular: true,

    value: '',
    disabled: false,
    type: 'button',
    isLoading: false,
    disableTouchRipple: false,

    rippleDisplayCenter: false,

    iconCls: '',
    rightIconCls: ''

};