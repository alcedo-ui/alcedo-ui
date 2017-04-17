import React, {Component, PropTypes} from 'react';

import BaseButton from '../_BaseButton';

import './FlatButton.css';

export default class FlatButton extends Component {

    constructor(props) {

        super(props);

        this.startRipple = this::this.startRipple;
        this.endRipple = this::this.endRipple;

    }

    startRipple(e) {
        this.refs.baseButton.startRipple(e);
    }

    endRipple() {
        this.refs.baseButton.endRipple();
    }

    render() {

        const {children, className, onTouchTap} = this.props;

        return (
            <BaseButton {...this.props}
                        ref="baseButton"
                        className={`flat-button ${className}`}
                        onTouchTap={onTouchTap}>
                {children}
            </BaseButton>
        );

    }
};

FlatButton.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    buttonStyle: PropTypes.string,
    isRounded: PropTypes.bool,
    isCircular: PropTypes.bool,

    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    type: PropTypes.string,
    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    disableTouchRipple: PropTypes.bool,

    iconCls: PropTypes.string,
    rightIconCls: PropTypes.string,

    rippleDisplayCenter: PropTypes.bool,

    onTouchTap: PropTypes.func

};

FlatButton.defaultProps = {

    className: '',
    style: null,

    buttonStyle: '',
    isRounded: false,
    isCircular: false,

    value: '',
    disabled: false,
    type: 'button',
    isLoading: false,
    disableTouchRipple: false,

    rippleDisplayCenter: false,

    iconCls: '',
    rightIconCls: ''

};

FlatButton.buttonStyle = BaseButton.buttonStyle;