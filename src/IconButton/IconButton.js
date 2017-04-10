import React, {Component, PropTypes} from 'react';

import BaseButton from '../_BaseButton';

import './IconButton.css';

export default class IconButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {children, className, onTouchTap} = this.props;

        return (
            <BaseButton {...this.props}
                        className={`icon-button ${className}`}
                        onTouchTap={onTouchTap}>
                {children}
            </BaseButton>
        );

    }
};

IconButton.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,
    buttonStyle: PropTypes.string,
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

IconButton.defaultProps = {

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