import React, {Component} from 'react';
import PropTypes from 'prop-types';

import CircularLoading from '../CircularLoading/CircularLoading';
import Tip from '../Tip/Tip';
import TouchRipple from '../TouchRipple/TouchRipple';
import Theme from '../Theme';

import Util from '../_vendors/Util';

import './BaseButton.css';

export default class BaseButton extends Component {

    constructor(props) {

        super(props);

        this.state = {
            tipVisible: false,
            triggerEl: null
        };

        this.mouseEnterHandle = this::this.mouseEnterHandle;
        this.mouseLeaveHandle = this::this.mouseLeaveHandle;
        this.clickHandle = this::this.clickHandle;
        this.startRipple = this::this.startRipple;
        this.endRipple = this::this.endRipple;
        this.hideTip = this::this.hideTip;

    }

    clickHandle(e) {
        const {disabled, isLoading, onTouchTap} = this.props;
        !disabled && !isLoading && onTouchTap && onTouchTap(e);
    }

    startRipple(e) {
        this.refs.touchRipple.addRipple(e);
    }

    endRipple() {
        this.refs.touchRipple.removeRipple();
    }

    mouseEnterHandle(e) {

        const {onMouseEnter} = this.props;

        this.setState({
            tipVisible: true,
            triggerEl: e.currentTarget
        }, () => {
            onMouseEnter && onMouseEnter();
        });

    }

    mouseLeaveHandle() {
        const {onMouseLeave} = this.props;
        onMouseLeave && onMouseLeave();
    }

    hideTip() {
        this.setState({
            tipVisible: false
        });
    }

    render() {

        const {
                children, className, style, theme, isRounded, isCircular, disableTouchRipple,
                iconCls, rightIconCls, type, value, disabled, isLoading, rippleDisplayCenter,
                tip, tipPosition, renderer
            } = this.props,
            {tipVisible, triggerEl} = this.state,
            loadingIconPosition = (rightIconCls && !iconCls) ? 'right' : 'left';

        return (
            <button className={`base-button ${theme ? `theme-${theme}` : ''}
                        ${isCircular ? 'button-circular' : (isRounded ? 'button-rounded' : '')} ${className}`}
                    style={style}
                    type={type}
                    disabled={disabled || isLoading}
                    onClick={this.clickHandle}
                    onMouseEnter={this.mouseEnterHandle}
                    onMouseLeave={this.mouseLeaveHandle}>

                {
                    isLoading && loadingIconPosition === 'left' ?
                        <CircularLoading className="button-icon button-icon-left button-loading-icon"
                                         size="small"/>
                        :
                        (
                            iconCls ?
                                <i className={`button-icon button-icon-left ${iconCls}`}
                                   aria-hidden="true"></i>
                                :
                                null
                        )
                }

                {
                    renderer && typeof renderer === 'function' ?
                        renderer(this.props)
                        :
                        value
                }

                {
                    isLoading && loadingIconPosition === 'right' ?
                        <CircularLoading className="button-icon button-icon-right button-loading-icon"
                                         size="small"/>
                        :
                        (
                            rightIconCls ?
                                <i className={`button-icon button-icon-right ${rightIconCls}`}
                                   aria-hidden="true"></i>
                                :
                                null
                        )
                }

                {children}

                {
                    tip ?
                        <Tip text={tip}
                             visible={tipVisible}
                             triggerEl={triggerEl}
                             position={tipPosition}
                             onRequestClose={this.hideTip}/>
                        :
                        null
                }

                {
                    disableTouchRipple ?
                        null
                        :
                        <TouchRipple ref="touchRipple"
                                     className={disabled || isLoading ? 'hidden' : ''}
                                     displayCenter={rippleDisplayCenter}/>
                }

            </button>
        );

    }
};

BaseButton.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),
    isRounded: PropTypes.bool,
    isCircular: PropTypes.bool,

    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    type: PropTypes.string,
    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    disableTouchRipple: PropTypes.bool,

    iconCls: PropTypes.string,
    rightIconCls: PropTypes.string,

    tip: PropTypes.string,
    tipPosition: PropTypes.string,

    rippleDisplayCenter: PropTypes.bool,

    renderer: PropTypes.func,
    onTouchTap: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func

};

BaseButton.defaultProps = {

    className: '',
    style: null,

    theme: Theme.DEFAULT,
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