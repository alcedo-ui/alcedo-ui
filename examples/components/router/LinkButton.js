import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

import CircularLoading from 'components/loading/CircularLoading';
import TouchRipple from 'components/ripple/TouchRipple';

import 'sass/components/router/LinkButton.scss';

export default class LinkButton extends Component {

    constructor(props) {

        super(props);

        this.clickHandle = this::this.clickHandle;

    }

    clickHandle(e) {
        !this.props.disabled && !this.props.isLoading && this.props.onClick && this.props.onClick(e);
    }

    render() {

        const {children, className, style, iconCls, type, value, disabled, isLoading, to} = this.props;

        return (
            <Link className={`link-button ${className}`}
                  style={style}
                  to={to}
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

            </Link>
        );

    }
};

LinkButton.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    iconCls: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    isLoading: PropTypes.bool,
    to: PropTypes.string.isRequired,

    onClick: PropTypes.func

};

LinkButton.defaultProps = {

    className: '',
    style: null,

    value: '',
    iconCls: '',
    disabled: false,
    type: 'button',
    isLoading: false

};