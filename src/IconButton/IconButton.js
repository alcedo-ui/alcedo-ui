/**
 * @file IconButton component
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import BaseButton from '../_BaseButton';
import TipProvider from '../TipProvider';
import Theme from '../Theme';

import Position from '../_statics/Position';

import Util from '../_vendors/Util';

class IconButton extends Component {

    static Theme = Theme;
    static TipPosition = Position;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.button = createRef();
        this.buttonInstance = null;

    }

    /**
     * public
     */
    startRipple = (e, props) => {
        this.buttonInstance && this.buttonInstance.startRipple(e, props);
    };

    /**
     * public
     */
    endRipple = () => {
        this.buttonInstance && this.buttonInstance.endRipple();
    };

    /**
     * public
     */
    triggerRipple = (e, props) => {
        this.buttonInstance && this.buttonInstance.triggerRipple(e, props);
    };

    componentDidMount() {
        this.buttonInstance = this.button && this.button.current;
    }

    render() {

        const {className, ...restProps} = this.props;

        return (
            <BaseButton {...restProps}
                        ref={this.button}
                        className={classNames('icon-button', {
                            [className]: className
                        })}
                        rippleDisplayCenter={true}/>
        );

    }
}

IconButton.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The button theme.Can be primary,highlight,success,warning,error.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * If true,the button will have rounded corners.
     */
    isRounded: PropTypes.bool,

    /**
     * If true,the button will be round.
     */
    isCircular: PropTypes.bool,

    /**
     * The title of the button.
     */
    title: PropTypes.string,

    /**
     * The type of button.Can be reset,submit or button.
     */
    type: PropTypes.string,

    /**
     * Disables the button if set to true.
     */
    disabled: PropTypes.bool,

    /**
     * If true,the button will be have loading effect.
     */
    isLoading: PropTypes.bool,

    /**
     * If true,the element's ripple effect will be disabled.
     */
    disableTouchRipple: PropTypes.bool,

    /**
     * Use this property to display an icon.It will display on the left.
     */
    iconCls: PropTypes.string,

    /**
     * Use this property to display an icon.It will display on the right.
     */
    rightIconCls: PropTypes.string,

    /**
     * If true,the ripple effect will be display centered.
     */
    rippleDisplayCenter: PropTypes.bool,

    tip: PropTypes.string,
    tipPosition: PropTypes.oneOf(Util.enumerateValue(TipProvider.Position)),

    /**
     * Callback function fired when the button is touch-tapped.
     */
    onClick: PropTypes.func

};

IconButton.defaultProps = {

    theme: Theme.DEFAULT,
    isRounded: false,
    isCircular: true,

    disabled: false,
    type: 'button',
    isLoading: false,
    disableTouchRipple: false,

    rippleDisplayCenter: false,

    tipPosition: TipProvider.Position.BOTTOM

};

export default IconButton;
