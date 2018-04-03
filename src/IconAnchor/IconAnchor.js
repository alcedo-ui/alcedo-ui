/**
 * @file IconAnchor component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CircularLoading from '../CircularLoading/CircularLoading';
import TouchRipple from '../TouchRipple/TouchRipple';
import Theme from '../Theme';
import TipProvider from '../TipProvider';

import Util from '../_vendors/Util';

class IconAnchor extends Component {

    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.touchTapHandler = ::this.touchTapHandler;
        this.startRipple = ::this.startRipple;
        this.endRipple = ::this.endRipple;

    }

    touchTapHandler(e) {
        e.preventDefault();
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

                className, theme, iconCls, disabled, isLoading,
                tip, tipPosition,

                ...restProps

            } = this.props,

            iconAnchorClassName = classNames('icon-anchor', {
                [`theme-${theme}`]: theme,
                [className]: className
            });

        return (
            <TipProvider text={tip}
                         position={tipPosition}>

                <a {...restProps}
                   className={iconAnchorClassName}
                   disabled={disabled || isLoading}
                   onTouchTap={this.touchTapHandler}>

                    {
                        isLoading ?
                            <CircularLoading size="small"/>
                            :
                            (
                                iconCls ?
                                    <i className={`icon-anchor-icon ${iconCls}`}
                                       aria-hidden="true"></i>
                                    :
                                    null
                            )
                    }

                    {
                        disabled || isLoading ?
                            null
                            :
                            <TouchRipple ref="touchRipple"
                                         className={disabled || isLoading ? 'hidden' : ''}
                                         displayCenter={true}/>
                    }

                </a>

            </TipProvider>
        );

    }
}

IconAnchor.propTypes = {

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
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * Disables the button if set to true.
     */
    disabled: PropTypes.bool,

    /**
     * If true,the button will be have loading effect.
     */
    isLoading: PropTypes.bool,

    /**
     * The icon within the IconAnchor is a Font Awesome component.This property is the className of the icon.
     */
    iconCls: PropTypes.string.isRequired,

    /**
     * The URL to link to when the button is clicked.
     */
    href: PropTypes.string,

    /**
     * How to open the linked document.The value can be _blank,_self,_parent or _top.
     */
    target: PropTypes.string,

    alt: PropTypes.string,

    tip: PropTypes.string,
    tipPosition: PropTypes.oneOf(Util.enumerateValue(TipProvider.Position)),

    /**
     * Callback function fired when the button is touch-tapped.
     */
    onTouchTap: PropTypes.func

};

IconAnchor.defaultProps = {

    theme: Theme.DEFAULT,

    disabled: false,
    isLoading: false,
    href: 'javascript:void(0)',
    target: '_blank',

    tipPosition: TipProvider.Position.BOTTOM

};

export default IconAnchor;