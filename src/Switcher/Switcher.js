/**
 * @file Switcher component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import IconButton from '../IconButton';

import Util from '../_vendors/Util';

export default class Switcher extends Component {

    static Size = {
        DEFAULT: '',
        SMALL: 'small'
    };

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

        const {className, style, disabled, isLoading, size} = this.props,
            {value} = this.state,

            switcherClassName = (value === true ? ' activated' : '') + (size === Switcher.Size.SMALL ? ' small' : '')
                + (className ? ' ' + className : '');

        return (
            <div className={'switcher' + switcherClassName}
                 style={style}
                 onTouchTap={this.touchTapHandler}
                 disabled={disabled || isLoading}>

                <IconButton className="switcher-slider-wrapper"
                            disableTouchRipple={disabled || isLoading}>
                    <div className="switcher-slider">
                        {
                            isLoading ?
                                <i className="fa fa-spinner fa-pulse fa-3x fa-fw switcher-loading"></i>
                                :
                                null
                        }
                    </div>
                </IconButton>

            </div>
        );

    }
};

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

Switcher.defaultProps = {

    className: '',
    style: null,

    value: false,
    disabled: false,
    isLoading: false,
    size: Switcher.Size.DEFAULT

};