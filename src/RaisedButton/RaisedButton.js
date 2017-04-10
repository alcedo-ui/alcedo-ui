import React, {Component, PropTypes} from 'react';

import BaseButton from '../_BaseButton';

import './RaisedButton.css';

export default class RaisedButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {children, className, onTouchTap} = this.props;

        return (
            <BaseButton {...this.props}
                        className={`raised-button ${className}`}
                        onClick={onTouchTap}>
                {children}
            </BaseButton>
        );

    }
};

RaisedButton.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,
    buttonStyle: PropTypes.stirng,
    rounded: PropTypes.bool,

    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    type: PropTypes.string,
    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    disableTouchRipple: PropTypes.bool,

    iconCls: PropTypes.string,
    iconPosition: PropTypes.string,

    onTouchTap: PropTypes.func

};

RaisedButton.defaultProps = {

    className: '',
    style: null,
    buttonStyle: '',
    rounded: false,

    value: '',
    disabled: false,
    type: 'button',
    isLoading: false,
    disableTouchRipple: false,

    iconCls: '',
    iconPosition: 'left'

};