import React, {Component, PropTypes} from 'react';

import BaseButton from '../_BaseButton';

import './RaisedButton.css';

export default class RaisedButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {children, className, onClick} = this.props;

        return (
            <BaseButton {...this.props}
                        className={`raised-button ${className}`}
                        onClick={onClick}>
                {children}
            </BaseButton>
        );

    }
};

RaisedButton.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,
    buttonStyle: PropTypes.stirng,

    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    iconCls: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    isLoading: PropTypes.bool,

    onClick: PropTypes.func

};

RaisedButton.defaultProps = {

    className: '',
    style: null,
    buttonStyle: '',

    value: '',
    iconCls: '',
    disabled: false,
    type: 'button',
    isLoading: false

};