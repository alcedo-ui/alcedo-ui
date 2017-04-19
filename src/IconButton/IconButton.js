import React, {Component, PropTypes} from 'react';

import BaseButton from '../_BaseButton';

import './IconButton.css';

export default class IconButton extends Component {

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

        const {children, className, isCircular, onTouchTap} = this.props;

        return (
            <BaseButton {...this.props}
                        ref="baseButton"
                        className={`icon-button ${className}`}
                        isCircular={isCircular}
                        onTouchTap={onTouchTap}
                        rippleDisplayCenter={true}>
                {children}
            </BaseButton>
        );

    }
};

IconButton.propTypes = {

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

IconButton.defaultProps = {

    className: '',
    style: null,

    buttonStyle: '',
    isRounded: false,
    isCircular: true,

    value: '',
    disabled: false,
    type: 'button',
    isLoading: false,
    disableTouchRipple: false,

    rippleDisplayCenter: false,

    iconCls: '',
    rightIconCls: ''

};

IconButton.ButtonStyle = BaseButton.ButtonStyle;