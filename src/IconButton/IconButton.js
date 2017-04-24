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
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The button theme.Can be primary,highlight,success,warning,error.
     */
    theme: PropTypes.string,

    /**
     * If true,the button will have rounded corners.
     */
    isRounded: PropTypes.bool,

    /**
     * If true,the button will be round.
     */
    isCircular: PropTypes.bool,

    /**
     * The text of the button.Type can be string or number.
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * The type of button.Can be reset,submit or button.
     */
    type: PropTypes.string,

    /**
     * Disables the button if set to true.
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
     * Use this property to display an icon.It will display on the left.
     */
    iconCls: PropTypes.string,

    /**
     * Use this property to display an icon.It will display on the right.
     */
    rightIconCls: PropTypes.string,

    /**
     * If true,the ripple effect will be display centered.
     */
    rippleDisplayCenter: PropTypes.bool,

    /**
     * Callback function fired when the button is touch-tapped.
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