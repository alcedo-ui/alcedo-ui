/**
 * @file Switcher component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import IconButton from '../IconButton';
import CircularLoading from '../CircularLoading';
import TipProvider from '../TipProvider';

import Theme from '../Theme';
import Position from '../_statics/Position';

import Util from '../_vendors/Util';
import ComponentUtil from '../_vendors/ComponentUtil';

class Switcher extends Component {

    static Size = {
        DEFAULT: '',
        SMALL: 'small'
    };
    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            value: !!props.value
        };

    }

    clickHandler = e => {

        const {disabled, isLoading, beforeChange, onClick} = this.props;

        if (disabled || isLoading) {
            return;
        }

        onClick && onClick(e);

        const value = !this.state.value,
            callback = () => {
                this.setState({
                    value
                }, () => {
                    const {onChange} = this.props;
                    onChange && onChange(value, e);
                });
            };

        if (beforeChange) {
            beforeChange(value) !== false && callback();
        } else {
            callback();
        }

    };

    static getDerivedStateFromProps(props, state) {
        return {
            prevProps: props,
            value: ComponentUtil.getDerivedState(props, state, 'value')
        };
    }

    render() {

        const {

                className, style, theme, disabled, isLoading, size, labelVisible,
                tip, triggerEl, parentEl, tipPosition,

                // not passing down these props
                beforeChange,

                ...restProps

            } = this.props,
            {value} = this.state,

            switcherClassName = classNames('switcher', {
                activated: value,
                small: size === Switcher.Size.SMALL,
                [`theme-${theme}`]: theme,
                [className]: className
            });

        return (
            <TipProvider tipContent={tip}
                         triggerEl={triggerEl}
                         parentEl={parentEl}
                         position={tipPosition}>
                <div {...restProps}
                     className={switcherClassName}
                     style={style}
                     disabled={disabled || isLoading}
                     onClick={this.clickHandler}>

                    {
                        labelVisible ?
                            <div className="switcher-label"></div>
                            :
                            null
                    }

                    <IconButton className="switcher-slider-wrapper"
                                disableTouchRipple={disabled || isLoading}>
                        <div className="switcher-slider">
                            {
                                isLoading ?
                                    <CircularLoading/>
                                    :
                                    null
                            }
                        </div>
                    </IconButton>

                </div>
            </TipProvider>
        );

    }
}

Switcher.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The Switcher theme.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * If true,the switcher will be in active status.
     */
    value: PropTypes.bool,

    /**
     * Disables the switcher if set to true.
     */
    disabled: PropTypes.bool,

    /**
     * If true,the switcher will be have loading effect.
     */
    isLoading: PropTypes.bool,

    labelVisible: PropTypes.bool,

    /**
     * The size of switcher.The value can be small or default.
     */
    size: PropTypes.oneOf(Util.enumerateValue(Switcher.Size)),

    tip: PropTypes.string,
    tipPosition: PropTypes.oneOf(Util.enumerateValue(Position)),
    triggerEl: PropTypes.object,
    parentEl: PropTypes.object,

    /**
     * Callback function fired when the switcher touch-tapped.
     */
    onClick: PropTypes.func,

    /**
     * Callback function fired before the switcher touch-tapped.
     */
    beforeChange: PropTypes.func,

    /**
     * Callback function fired when the switcher touch-tapped.
     */
    onChange: PropTypes.func

};

Switcher.defaultProps = {

    theme: Theme.DEFAULT,

    value: false,
    disabled: false,
    isLoading: false,
    labelVisible: false,
    size: Switcher.Size.DEFAULT,

    tipPosition: Position.BOTTOM

};

export default Switcher;
