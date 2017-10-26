/**
 * @file Anchor component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import CircularLoading from '../CircularLoading';
import TipProvider from '../TipProvider';
import Theme from '../Theme';

import Util from '../_vendors/Util';

export default class Anchor extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            focused: false
        };

        this.touchTapHandler = ::this.touchTapHandler;
        this.focusHandler = ::this.focusHandler;
        this.blurHandler = ::this.blurHandler;
        this.startRipple = ::this.startRipple;
        this.endRipple = ::this.endRipple;

    }

    touchTapHandler(e) {
        e.preventDefault();
        const {disabled, isLoading, onTouchTap} = this.props;
        !disabled && !isLoading && onTouchTap && onTouchTap(e);
    }

    focusHandler(e) {
        this.setState({
            focused: true
        }, () => {
            const {onFocus} = this.props;
            onFocus && onFocus(e);
        });
    }

    blurHandler(e) {
        this.setState({
            focused: false
        }, () => {
            const {onBlur} = this.props;
            onBlur && onBlur(e);
        });
    }

    startRipple(e) {
        this.refs.touchRipple.addRipple(e);
    }

    endRipple() {
        this.refs.touchRipple.removeRipple();
    }

    render() {

        const {

                children, className, style, theme,
                iconCls, rightIconCls, disabled, isLoading, tip, tipPosition,

                ...restProps

            } = this.props,
            {focused} = this.state,

            anchorClassName = (focused ? ' focused' : '') + (theme ? ` theme-${theme}` : '')
                + (className ? ' ' + className : ''),

            loadingIconPosition = (rightIconCls && !iconCls) ? 'right' : 'left';

        return (
            <TipProvider text={tip}
                         position={tipPosition}>

                <a {...restProps}
                   className={'anchor' + anchorClassName}
                   style={style}
                   disabled={disabled || isLoading}
                   onTouchTap={this.touchTapHandler}
                   onFocus={this.focusHandler}
                   onBlur={this.blurHandler}>

                    {
                        isLoading && loadingIconPosition === 'left' ?
                            <CircularLoading className="anchor-icon anchor-icon-left button-loading-icon"
                                             size="small"/>
                            :
                            (
                                iconCls ?
                                    <i className={`anchor-icon anchor-icon-left ${iconCls}`}
                                       aria-hidden="true"></i>
                                    :
                                    null
                            )
                    }

                    {children}

                    {
                        isLoading && loadingIconPosition === 'right' ?
                            <CircularLoading className="anchor-icon anchor-icon-right button-loading-icon"
                                             size="small"/>
                            :
                            (
                                rightIconCls ?
                                    <i className={`anchor-icon anchor-icon-right ${rightIconCls}`}
                                       aria-hidden="true"></i>
                                    :
                                    null
                            )
                    }

                </a>

            </TipProvider>
        );

    }
};

Anchor.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    href: PropTypes.string,
    alt: PropTypes.string,

    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    isLoading: PropTypes.bool,

    iconCls: PropTypes.string,
    rightIconCls: PropTypes.string,

    tip: PropTypes.string,
    tipPosition: PropTypes.string,

    onTouchTap: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func

};

Anchor.defaultProps = {

    className: null,
    style: null,
    theme: Theme.DEFAULT,

    href: 'javascript:void(0)',
    alt: null,

    disabled: false,
    readOnly: false,
    isLoading: false,

    iconCls: null,
    rightIconCls: null

};