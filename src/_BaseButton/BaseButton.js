import React, {Component, PropTypes} from 'react';

import CircularLoading from '../CircularLoading/CircularLoading';
import TouchRipple from '../TouchRipple/TouchRipple';

import './BaseButton.css';

export default class BaseButton extends Component {

    constructor(props) {

        super(props);

        this.clickHandle = this::this.clickHandle;

    }

    clickHandle(e) {
        !this.props.disabled && !this.props.isLoading && this.props.onClick && this.props.onClick(e);
    }

    render() {

        const {children, className, style, iconCls, type, value, disabled, isLoading} = this.props;

        return (
            <button className={`base-button ${className}`}
                    style={style}
                    type={type}
                    disabled={disabled || isLoading}
                    onMouseDown={this.clickHandle}>

                {
                    iconCls ?
                        (isLoading ?
                            <CircularLoading size="small"/>
                            :
                            <i className={iconCls}
                               aria-hidden="true"></i>)
                        :
                        null
                }

                {value}

                {children}

                <TouchRipple className={disabled || isLoading ? 'hidden' : ''}/>

            </button>
        );

    }
};

BaseButton.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    iconCls: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    isLoading: PropTypes.bool,

    onClick: PropTypes.func

};

BaseButton.defaultProps = {

    className: '',
    style: null,

    value: '',
    iconCls: '',
    disabled: false,
    type: 'button',
    isLoading: false

};