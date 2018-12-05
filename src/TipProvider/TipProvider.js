/**
 * @file TipProvider component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, isValidElement, cloneElement, Fragment} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';
import classNames from 'classnames';

import Tip from '../Tip';
import Theme from '../Theme';

import Util from '../_vendors/Util';
import Position from '../_statics/Position';

class TipProvider extends Component {

    static Position = Tip.Position;
    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            visible: props.visible
        };

    }

    showTip = () => {
        if (!this.state.visible) {
            this.setState({
                visible: true
            });
        }
    };

    hideTip = () => {
        this.setState({
            visible: false
        });
    };

    componentDidMount() {
        this.refs.trigger && (this.triggerEl = findDOMNode(this.refs.trigger));
    }

    render() {

        const {children, text, onTipRender, ...restProps} = this.props,
            {visible} = this.state;

        if (!text) {
            return children;
        }

        return (
            <Fragment>

                {
                    cloneElement(children, {
                        ref: 'trigger',
                        onMouseOver: e => {

                            if (children && children.props && children.props.onMouseOver
                                && typeof children.props.onMouseOver === 'function') {
                                children.props.onMouseOver(e);
                            }

                            this.showTip();

                        },
                        onMouseOut: e => {

                            if (children && children.props && children.props.onMouseOut
                                && typeof children.props.onMouseOut === 'function') {
                                children.props.onMouseOut(e);
                            }

                            this.hideTip();

                        }
                    })
                }

                <Tip {...restProps}
                     triggerEl={this.triggerEl}
                     visible={visible}
                     onRender={onTipRender}>
                    {text}
                </Tip>

            </Fragment>
        );
    }

}

TipProvider.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * The CSS class name of the content element.
     */
    contentClassName: PropTypes.string,

    modalClassName: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The popover theme.Can be primary,highlight,success,warning,error.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

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
     * The popover alignment.
     */
    position: PropTypes.oneOf(Util.enumerateValue(Position)),

    /**
     * If true, menu will have animation effects.
     */
    isAnimated: PropTypes.bool,

    shouldPreventContainerScroll: PropTypes.bool,

    /**
     * The depth of Paper component.
     */
    depth: PropTypes.number,

    isTriggerPositionFixed: PropTypes.bool,
    resetPositionWait: PropTypes.number,
    showModal: PropTypes.bool,

    /**
     * The function of tip render.
     */
    onRender: PropTypes.func,

    /**
     * The function of tip rendered.
     */
    onRendered: PropTypes.func,

    /**
     * The function of tip destroy.
     */
    onDestroy: PropTypes.func,

    /**
     * The function of tip destroyed.
     */
    onDestroyed: PropTypes.func,

    /**
     * Callback function fired when wrapper wheeled.
     */
    onWheel: PropTypes.func

};

TipProvider.defaultProps = {

    theme: Theme.DARK,

    visible: false,
    hasTriangle: true,
    position: Position.BOTTOM,
    isAnimated: true,
    shouldPreventContainerScroll: true,
    isTriggerPositionFixed: false,
    resetPositionWait: 250,
    showModal: false

};

export default TipProvider;
