import React, {Component, PropTypes} from 'react';

import CircularLoading from '../CircularLoading/CircularLoading';
import TouchRipple from '../TouchRipple/TouchRipple';

import './BaseButton.css';

export default class BaseButton extends Component {

    constructor(props) {

        super(props);

        this.clickHandle = this::this.clickHandle;
        this.startRipple = this::this.startRipple;
        this.endRipple = this::this.endRipple;

    }

    clickHandle(e) {
        const {disabled, isLoading, onTouchTap} = this.props;
        !disabled && !isLoading && onTouchTap && onTouchTap(e);
    }

    startRipple(e) {
        this.refs.touchRipple.addRipple(e);
    }

    endRipple() {
        this.refs.touchRipple.removeRipple();
    }

    render() {

        const {
            children, className, style, buttonStyle, isRounded, isCircular,
            iconCls, iconPosition, type, value, disabled, isLoading, rippleDisplayCenter
        } = this.props;

        const iconEl = iconCls ?
            (isLoading ?
                <CircularLoading size="small"/>
                :
                <i className={`button-icon button-icon-${iconPosition} ${iconCls}`}
                   aria-hidden="true"></i>)
            :
            null;

        return (
            <button className={`base-button theme-${buttonStyle}
                        ${isCircular ? 'button-circular' : (isRounded ? 'button-rounded' : '')} ${className}`}
                    style={style}
                    type={type}
                    disabled={disabled || isLoading}
                    onMouseDown={this.clickHandle}>

                {
                    iconPosition === 'left'
                        ? iconEl
                        : null
                }

                {value}

                {
                    iconPosition === 'right'
                        ? iconEl
                        : null
                }

                {children}

                <TouchRipple ref="touchRipple"
                             className={disabled || isLoading ? 'hidden' : ''}
                             displayCenter={rippleDisplayCenter}/>

            </button>
        );

    }
};

BaseButton.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,
    buttonStyle: PropTypes.string,
    isRounded: PropTypes.bool,
    isCircular: PropTypes.bool,

    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    type: PropTypes.string,
    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    disableTouchRipple: PropTypes.bool,

    iconCls: PropTypes.string,
    iconPosition: PropTypes.string,

    rippleDisplayCenter: PropTypes.bool,

    onTouchTap: PropTypes.func

};

BaseButton.defaultProps = {

    className: '',
    style: null,
    buttonStyle: '',
    isRounded: false,
    isCircular: false,

    value: '',
    disabled: false,
    type: 'button',
    isLoading: false,
    disableTouchRipple: false,

    rippleDisplayCenter: false,

    iconCls: '',
    iconPosition: 'left'

};