/**
 * @file PopoverProvider component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, cloneElement, Fragment} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';

import Popover from '../Popover';
import Theme from '../Theme';

import Util from '../_vendors/Util';

class PopoverProvider extends Component {

    static Position = Tip.Position;
    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            tipVisible: false
        };

    }

    showTip = () => {
        if (!this.state.tipVisible) {
            this.setState({
                tipVisible: true
            });
        }
    };

    hideTip = () => {
        this.setState({
            tipVisible: false
        });
    };

    componentDidMount() {
        this.refs.trigger && (this.triggerEl = findDOMNode(this.refs.trigger));
    }

    render() {

        const {children, text, onTipRender, ...restProps} = this.props,
            {tipVisible} = this.state;

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

                <Popover {...restProps}
                         triggerEl={this.triggerEl}
                         visible={tipVisible}
                         onRender={onTipRender}>
                    {text}
                </Popover>

            </Fragment>
        );
    }

}

PopoverProvider.propTypes = {

    /**
     * The CSS class name of the tip element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

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
     * The popover alignment.
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

    isTriggerPositionFixed: PropTypes.bool,

    /**
     * The function of tip render.
     */
    onTipRender: PropTypes.func,

    /**
     * Callback function fired when wrapper wheeled.
     */
    onWheel: PropTypes.func,

    text: PropTypes.any

};

PopoverProvider.defaultProps = {

    theme: Theme.DARK,

    hasTriangle: true,
    position: Tip.Position.BOTTOM,
    isAnimated: true,
    shouldPreventContainerScroll: true,
    isTriggerPositionFixed: false

};

export default PopoverProvider;
