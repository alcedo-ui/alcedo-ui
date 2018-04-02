/**
 * @file Switcher component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import classNames from 'classnames';

import IconButton from '../IconButton';
import CircularLoading from '../CircularLoading';
import Theme from '../Theme';

import PureRender from '../_vendors/PureRender';
import Util from '../_vendors/Util';

@PureRender
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

        this.touchTapHandler = ::this.touchTapHandler;

    }

    touchTapHandler(e) {

        e.preventDefault();

        const {disabled, isLoading, beforeChange, onTouchTap} = this.props;

        if (disabled || isLoading) {
            return;
        }

        onTouchTap && onTouchTap(e);

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

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.state.value) {
            this.setState({
                value: !!nextProps.value
            });
        }
    }

    render() {

        const {className, style, theme, disabled, isLoading, size, labelVisible} = this.props,
            {value} = this.state,

            switcherClassName = classNames('switcher', {
                activated: value,
                small: size === Switcher.Size.SMALL,
                [`theme-${theme}`]: theme,
                [className]: className
            });

        return (
            <div className={switcherClassName}
                 style={style}
                 disabled={disabled || isLoading}
                 onTouchTap={this.touchTapHandler}>

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
        );

    }
};

if (process.env.NODE_ENV === 'development') {

    const PropTypes = require('prop-types');

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

        /**
         * Callback function fired when the switcher touch-tapped.
         */
        onTouchTap: PropTypes.func,

        /**
         * Callback function fired before the switcher touch-tapped.
         */
        beforeChange: PropTypes.func,

        /**
         * Callback function fired when the switcher touch-tapped.
         */
        onChange: PropTypes.func

    };

}

Switcher.defaultProps = {

    theme: Theme.DEFAULT,

    value: false,
    disabled: false,
    isLoading: false,
    labelVisible: false,
    size: Switcher.Size.DEFAULT

};

export default Switcher;