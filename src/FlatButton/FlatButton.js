import React, {Component, PropTypes} from 'react';

import BaseButton from '../_BaseButton';

import './FlatButton.css';

export default class FlatButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {children, className, onTouchTap} = this.props;

        return (
            <BaseButton {...this.props}
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
    iconPosition: PropTypes.string,

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

    iconCls: '',
    iconPosition: 'left'

};