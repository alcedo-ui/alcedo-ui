/**
 * @file IconAnchor component
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CircularLoading from '../CircularLoading/CircularLoading';
import TouchRipple from '../TouchRipple/TouchRipple';
import TipProvider from '../TipProvider';

import Theme from '../Theme';
import Util from '../_vendors/Util';

class IconAnchor extends Component {

    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.touchRipple = createRef();

    }

    /**
     * public
     */
    startRipple = (e, props) => {
        !this.props.disableTouchRipple && this.touchRipple && this.touchRipple.current
        && this.touchRipple.current.addRipple(e, props);
    };

    /**
     * public
     */
    endRipple = () => {
        !this.props.disableTouchRipple && this.touchRipple && this.touchRipple.current
        && this.touchRipple.current.removeRipple();
    };

    /**
     * public
     */
    triggerRipple = (e, props) => {
        this.startRipple(e, props);
        setTimeout(() => {
            this.endRipple();
        }, 250);
    };

    handleClick = e => {
        const {disabled, isLoading, onClick} = this.props;
        !disabled && !isLoading && onClick && onClick(e);
    };

    render() {

        const {
            className, theme, iconCls, disabled, isLoading, tip, tipPosition, disableTouchRipple, parentEl,
            ...restProps
        } = this.props;

        return (
            <TipProvider tipContent={tip}
                         parentEl={parentEl}
                         position={tipPosition}>
                <a {...restProps}
                   className={classNames('icon-anchor', {
                       [`theme-${theme}`]: theme,
                       [className]: className
                   })}
                   disabled={disabled || isLoading}
                   onClick={this.handleClick}>

                    {
                        isLoading ?
                            <CircularLoading size="small"/>
                            :
                            iconCls ?
                                <i className={`icon-anchor-icon ${iconCls}`}
                                   aria-hidden="true"></i>
                                :
                                null
                    }

                    {
                        disableTouchRipple ?
                            null
                            :
                            <TouchRipple ref={this.touchRipple}
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
    disableTouchRipple: PropTypes.bool,
    parentEl: PropTypes.object,

    tip: PropTypes.string,
    tipPosition: PropTypes.oneOf(Util.enumerateValue(TipProvider.Position)),

    /**
     * Callback function fired when the button is touch-tapped.
     */
    onClick: PropTypes.func

};

IconAnchor.defaultProps = {

    theme: Theme.DEFAULT,

    disabled: false,
    isLoading: false,
    href: 'javascript:void(0)',
    target: '_blank',
    disableTouchRipple: false,

    tipPosition: TipProvider.Position.BOTTOM

};

export default IconAnchor;
