import React, {Component} from 'react';
import PropTypes from 'prop-types';

import IconButton from '../IconButton';

import Util from '../_vendors/Util';

import './Switcher.css';

export default class Switcher extends Component {

    static Size = {
        DEFAULT: '',
        SMALL: 'small'
    };

    constructor(props) {

        super(props);

        this.state = {
            value: !!props.value
        };

        this.toggle = this::this.toggle;

    }

    toggle() {

        const {disabled, isLoading, beforeChange, onChange} = this.props;

        if (disabled || isLoading) {
            return;
        }

        const value = !this.state.value,
            callback = () => {
                this.setState({
                    value
                }, () => {
                    onChange && onChange(value);
                });
            };

        if (beforeChange) {
            beforeChange(value) && callback();
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

        const {className, style, disabled, isLoading, size} = this.props;
        const {value} = this.state;

        return (
            <div className={`switcher ${value == true ? 'active' : 'inactive'}
                    ${size === 'small' ? 'small' : ''} ${className}`}
                 style={style}
                 onClick={this.toggle}
                 disabled={disabled || isLoading}>

                <IconButton className="switcher-slider-wrapper"
                            disableTouchRipple={disabled || isLoading}>

                    <div className="switcher-slider">
                        {
                            isLoading ?
                                <i className="fa fa-spinner fa-pulse fa-3x fa-fw switcher-loading"></i>
                                : null
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
     * Callback function fired before the switcher is touch-tapped.
     */
    beforeChange: PropTypes.func,

    /**
     * Callback function fired when the switcher is touch-tapped.
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