/**
 * @file TipProvider component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Tip from '../Tip';
import Theme from '../Theme';

import Util from '../_vendors/Util';

export default class TipProvider extends Component {

    static Position = Tip.Position;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            tipVisible: false
        };

        this.showTip = ::this.showTip;
        this.hideTip = ::this.hideTip;

    }

    showTip(e) {
        if (!this.state.tipVisible) {
            this.setState({
                tipVisible: true
            });
        }
    }

    hideTip() {
        this.setState({
            tipVisible: false
        });
    }

    componentDidMount() {
        this.triggerWrapperEl = this.refs.triggerWrapper;
    }

    render() {

        const {children, text, onTipRender, ...restProps} = this.props,
            {tipVisible} = this.state;

        if (!text) {
            return children;
        }

        return (
            <div className="tip-provider">

                <div ref="triggerWrapper"
                     className="trigger-wrapper"
                     onMouseEnter={this.showTip}>
                    {children}
                </div>

                <Tip {...restProps}
                     triggerEl={this.triggerWrapperEl}
                     visible={tipVisible}
                     onRender={onTipRender}
                     onRequestClose={this.hideTip}>
                    {text}
                </Tip>

            </div>
        );
    }

}

TipProvider.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * This is the DOM element that will be used to set the position of the popover.
     */
    triggerEl: PropTypes.object,

    /**
     * If true,the popover is visible.
     */
    visible: PropTypes.bool,

    /**
     * If true,the popover will have a triangle on the top of the DOM element.
     */
    hasTriangle: PropTypes.bool,

    triangle: PropTypes.element,

    /**
     * The popover theme.Can be primary,highlight,success,warning,error.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * The popover alignment.The value can be Menu.Position.LEFT or Menu.Position.RIGHT.
     */
    position: PropTypes.oneOf(Util.enumerateValue(Tip.Position)),

    /**
     * If true, menu will have animation effects.
     */
    isAnimated: PropTypes.bool,

    shouldPreventContainerScroll: PropTypes.bool,

    /**
     * The depth of Paper component.
     */
    depth: PropTypes.number,

    /**
     * The function of tip render.
     */
    onTipRender: PropTypes.func,

    /**
     * Callback function fired when the popover is requested to be closed.
     */
    onRequestClose: PropTypes.func,

    /**
     * Callback function fired when wrapper wheeled.
     */
    onWheel: PropTypes.func,

    text: PropTypes.any

};

TipProvider.defaultProps = {

    className: '',
    style: null,
    theme: Theme.DEFAULT,

    triggerEl: null,
    visible: false,
    hasTriangle: true,
    triangle: <div className="tip-triangle"></div>,
    position: Tip.Position.BOTTOM,
    isAnimated: true,
    depth: 6,
    shouldPreventContainerScroll: true,

    text: null

};