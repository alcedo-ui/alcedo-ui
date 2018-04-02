/**
 * @file Anchor component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import classNames from 'classnames';

import CircularLoading from '../CircularLoading';
import TipProvider from '../TipProvider';
import Theme from '../Theme';

import PureRender from '../_vendors/PureRender';
import Util from '../_vendors/Util';

@PureRender
class Anchor extends Component {

    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            focused: false
        };

        this.touchTapHandler = ::this.touchTapHandler;
        this.focusHandler = ::this.focusHandler;
        this.blurHandler = ::this.blurHandler;

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

    render() {

        const {

                children, className, style, theme,
                iconCls, rightIconCls, disabled, isLoading, tip, tipPosition,

                ...restProps

            } = this.props,
            {focused} = this.state,

            anchorClassName = classNames('anchor', {
                focused: focused,
                [`theme-${theme}`]: theme,
                [className]: className
            }),

            loadingIconPosition = (rightIconCls && !iconCls) ? 'right' : 'left';

        return (
            <TipProvider text={tip}
                         position={tipPosition}>

                <a {...restProps}
                   className={anchorClassName}
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

if (process.env.NODE_ENV === 'development') {

    const PropTypes = require('prop-types');

    Anchor.propTypes = {

        className: PropTypes.string,
        style: PropTypes.object,
        theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

        href: PropTypes.string,
        alt: PropTypes.string,
        target: PropTypes.string,

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

}

Anchor.defaultProps = {

    className: null,
    style: null,
    theme: Theme.DEFAULT,

    href: 'javascript:void(0)',
    alt: null,
    target: '_blank',

    disabled: false,
    readOnly: false,
    isLoading: false,

    iconCls: null,
    rightIconCls: null

};

export default Anchor;