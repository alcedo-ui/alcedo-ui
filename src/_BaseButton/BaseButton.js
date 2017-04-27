import React, {Component} from 'react';
import PropTypes from 'prop-types';

import CircularLoading from '../CircularLoading/CircularLoading';
import TouchRipple from '../TouchRipple/TouchRipple';
import Theme from '../Theme';

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
            children, className, style, theme, isRounded, isCircular,
            iconCls, rightIconCls, type, value, disabled, isLoading, rippleDisplayCenter, onMouseOver,onMouseOut
        } = this.props;

        return (
            <button className={`base-button ${theme ? `theme-${theme}` : ''}
                        ${isCircular ? 'button-circular' : (isRounded ? 'button-rounded' : '')} ${className}`}
                    style={style}
                    type={type}
                    disabled={disabled || isLoading}
                    onClick={this.clickHandle}
                    onMouseOver={onMouseOver}
                    onMouseOut={onMouseOut}>

                {
                    isLoading
                        ? <CircularLoading size="small"/>
                        : (
                        iconCls
                            ? <i className={`button-icon button-icon-left ${iconCls}`}
                                 aria-hidden="true"></i>
                            : null
                    )
                }

                {value}

                {
                    rightIconCls
                        ? <i className={`button-icon button-icon-right ${rightIconCls}`}
                             aria-hidden="true"></i>
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

    theme: PropTypes.oneOf(Object.keys(Theme).map(key => Theme[key])),
    isRounded: PropTypes.bool,
    isCircular: PropTypes.bool,

    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    type: PropTypes.string,
    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    disableTouchRipple: PropTypes.bool,

    iconCls: PropTypes.string,
    rightIconCls: PropTypes.string,

    rippleDisplayCenter: PropTypes.bool,

    onTouchTap: PropTypes.func

};

BaseButton.defaultProps = {

    className: '',
    style: null,

    theme: Theme.DEFAULT,
    isRounded: false,
    isCircular: false,

    value: '',
    disabled: false,
    type: 'button',
    isLoading: false,
    disableTouchRipple: false,

    rippleDisplayCenter: false,

    iconCls: '',
    rightIconCls: ''

};