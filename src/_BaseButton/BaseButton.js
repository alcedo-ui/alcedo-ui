import React, {Component} from 'react';
import PropTypes from 'prop-types';

import CircularLoading from '../CircularLoading';
import TipContainer from '../TipContainer';
import TouchRipple from '../TouchRipple';
import Theme from '../Theme';

import Util from '../_vendors/Util';

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
                children, className, style, theme, isRounded, isCircular, disableTouchRipple,
                iconCls, rightIconCls, type, value, disabled, isLoading, rippleDisplayCenter,
                tip, tipPosition, renderer, onMouseEnter, onMouseLeave
            } = this.props,

            buttonClassName = (theme ? ` theme-${theme}` : '')
                + (isCircular ? ' button-circular' : (isRounded ? ' button-rounded' : ''))
                + (className ? ' ' + className : ''),

            loadingIconPosition = (rightIconCls && !iconCls) ? 'right' : 'left';

        return (
            <TipContainer text={tip}
                          position={tipPosition}>

                <button className={'base-button' + buttonClassName}
                        style={style}
                        type={type}
                        disabled={disabled || isLoading}
                        onClick={this.clickHandle}
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}>

                    {
                        isLoading && loadingIconPosition === 'left' ?
                            <CircularLoading className="button-icon button-icon-left button-loading-icon"
                                             size="small"/>
                            :
                            (
                                iconCls ?
                                    <i className={`button-icon button-icon-left ${iconCls}`}
                                       aria-hidden="true"></i>
                                    :
                                    null
                            )
                    }

                    {
                        renderer && typeof renderer === 'function' ?
                            renderer(this.props)
                            :
                            value
                    }

                    {
                        isLoading && loadingIconPosition === 'right' ?
                            <CircularLoading className="button-icon button-icon-right button-loading-icon"
                                             size="small"/>
                            :
                            (
                                rightIconCls ?
                                    <i className={`button-icon button-icon-right ${rightIconCls}`}
                                       aria-hidden="true"></i>
                                    :
                                    null
                            )
                    }

                    {children}

                    {
                        disableTouchRipple ?
                            null
                            :
                            <TouchRipple ref="touchRipple"
                                         className={disabled || isLoading ? 'hidden' : ''}
                                         displayCenter={rippleDisplayCenter}/>
                    }

                </button>

            </TipContainer>
        );

    }
};

BaseButton.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),
    isRounded: PropTypes.bool,
    isCircular: PropTypes.bool,

    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    type: PropTypes.string,
    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    disableTouchRipple: PropTypes.bool,

    iconCls: PropTypes.string,
    rightIconCls: PropTypes.string,

    tip: PropTypes.string,
    tipPosition: PropTypes.string,

    rippleDisplayCenter: PropTypes.bool,

    renderer: PropTypes.func,
    onTouchTap: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func

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