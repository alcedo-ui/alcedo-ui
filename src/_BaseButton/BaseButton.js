/**
 * @file BaseButton component
 */

import React, {Component, cloneElement, Fragment, createRef} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CircularLoading from '../CircularLoading';
import TipProvider from '../TipProvider';
import TouchRipple from '../TouchRipple';
import Theme from '../Theme';

import Util from '../_vendors/Util';
import Position from '../_statics/Position';

class BaseButton extends Component {

    static Theme = Theme;
    static TipPosition = Position;

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

                children, className, style, theme, isRounded, isCircular, disableTouchRipple,
                iconCls, rightIconCls, type, value, disabled, readOnly, isLoading, rippleDisplayCenter,
                tip, tipPosition, renderer, parentEl, triggerEl, container,

                ...restProps

            } = this.props,

            loadingIconPosition = (rightIconCls && !iconCls) ? 'right' : 'left';

        return (
            <TipProvider tipContent={tip}
                         triggerEl={triggerEl}
                         parentEl={parentEl}
                         position={tipPosition}>
                {
                    cloneElement(container, {
                        ...restProps,
                        className: classNames('base-button', {
                            [`theme-${theme}`]: theme,
                            'button-circular': isCircular,
                            'button-rounded': isRounded,
                            [className]: className
                        }),
                        style,
                        type,
                        disabled: disabled || isLoading,
                        readOnly,
                        onClick: this.handleClick,
                        children: (
                            <Fragment>

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
                                        (
                                            value ?
                                                <span className="base-button-value">{value}</span>
                                                :
                                                null
                                        )
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
                                        <TouchRipple ref={this.touchRipple}
                                                     className={disabled || isLoading ? 'hidden' : ''}
                                                     displayCenter={rippleDisplayCenter}/>
                                }

                            </Fragment>
                        )
                    })
                }
            </TipProvider>
        );

    }
}

BaseButton.propTypes = {

    children: PropTypes.any,

    className: PropTypes.string,
    style: PropTypes.object,
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    isRounded: PropTypes.bool,
    isCircular: PropTypes.bool,

    title: PropTypes.string,
    value: PropTypes.any,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    isLoading: PropTypes.bool,
    disableTouchRipple: PropTypes.bool,

    iconCls: PropTypes.string,
    rightIconCls: PropTypes.string,

    tip: PropTypes.string,
    tipPosition: PropTypes.oneOf(Util.enumerateValue(Position)),

    rippleDisplayCenter: PropTypes.bool,

    parentEl: PropTypes.object,
    triggerEl: PropTypes.object,

    container: PropTypes.object,

    renderer: PropTypes.func,
    onClick: PropTypes.func

};

BaseButton.defaultProps = {

    theme: Theme.DEFAULT,

    isRounded: false,
    isCircular: false,

    disabled: false,
    readOnly: false,
    type: 'button',
    isLoading: false,
    disableTouchRipple: false,
    rippleDisplayCenter: false,

    tipPosition: Position.BOTTOM,

    container: <button></button>

};

export default BaseButton;
