import React, {Component, PropTypes} from 'react';

import CircularLoading from '../CircularLoading/CircularLoading';
import TouchRipple from '../TouchRipple/TouchRipple';

import './BaseButton.css';

export default class BaseButton extends Component {

    constructor(props) {

        super(props);

        this.clickHandle = this::this.clickHandle;

    }

    clickHandle(e) {
        const {disabled, isLoading, onTouchTap} = this.props;
        !disabled && !isLoading && onTouchTap && onTouchTap(e);
    }

    render() {

        const {children, className, style, buttonStyle, rounded, iconCls, iconPosition, type, value, disabled, isLoading} = this.props;

        const iconEl = iconCls ?
            (isLoading ?
                <CircularLoading size="small"/>
                :
                <i className={`button-icon button-icon-${iconPosition} ${iconCls}`}
                   aria-hidden="true"></i>)
            :
            null;

        return (
            <button className={`base-button theme-${buttonStyle} ${rounded ? 'button-rounded' : ''} ${className}`}
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

                <TouchRipple className={disabled || isLoading ? 'hidden' : ''}/>

            </button>
        );

    }
};

BaseButton.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,
    buttonStyle: PropTypes.string,
    rounded: PropTypes.bool,

    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    type: PropTypes.string,
    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    disableTouchRipple: PropTypes.bool,

    iconCls: PropTypes.string,
    iconPosition: PropTypes.string,

    onTouchTap: PropTypes.func

};

BaseButton.defaultProps = {

    className: '',
    style: null,
    buttonStyle: '',
    rounded: false,

    value: '',
    disabled: false,
    type: 'button',
    isLoading: false,
    disableTouchRipple: false,

    iconCls: '',
    iconPosition: 'left'

};