/**
 * @file DrawerProvider component
 */

import React, {Component, Fragment, cloneElement, createRef} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';

// components
import Drawer from '../Drawer';

// statics
import Theme from '../Theme';
import Position from '../_statics/Position';

// vendors
import Util from '../_vendors/Util';
import ComponentUtil from '../_vendors/ComponentUtil';

class DrawerProvider extends Component {

    static Position = Position;
    static Theme = Theme;

    static getDerivedStateFromProps(props, state) {
        return {
            prevProps: props,
            visible: ComponentUtil.getDerivedState(props, state, 'visible')
        };
    }

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.trigger = createRef();
        this.triggerEl = null;

        this.state = {
            visible: props.visible
        };

    }

    componentDidMount() {
        this.triggerEl = findDOMNode(this.trigger?.current);
    }

    /**
     * public
     */
    show = () => {

        if (this.state.visible) {
            return;
        }

        this.setState({
            visible: true
        }, () => this.props.onRequestOpen?.());

    };

    /**
     * public
     */
    hide = () => {

        if (!this.state.visible) {
            return;
        }

        this.setState({
            visible: false
        }, () => this.props.onRequestClose?.());

    };

    /**
     * public
     */
    toggle = () => {
        this.setState({
            visible: !this.state.visible
        }, () => {
            if (!this.state.visible) {
                this.props.onRequestClose?.();
            } else {
                this.props.onRequestOpen?.();
            }
        });
    };

    handleClick = e => {

        e?.stopPropagation();

        const {children} = this.props;

        if (children && children.props && children.props.onClick
            && typeof children.props.onClick === 'function') {
            children.props.onClick(e);
        }

        this.toggle();

    };

    render() {

        const {

            children, drawerContent,

            // not passing down these props
            // eslint-disable-next-line no-unused-vars
            onRequestOpen, onRequestClose,

            ...restProps

        } = this.props;
        const {visible} = this.state;

        if (!drawerContent) {
            return children;
        }

        return (
            <Fragment>

                {
                    cloneElement(children, {
                        ref: this.trigger,
                        onClick: this.handleClick
                    })
                }

                <Drawer {...restProps}
                        triggerEl={this.triggerEl}
                        visible={visible}
                        onRequestClose={this.hide}>
                    {drawerContent}
                </Drawer>

            </Fragment>
        );

    }

}

DrawerProvider.propTypes = {

    children: PropTypes.any,

    /**
     * The css class name of the root element.
     */
    className: PropTypes.string,

    /**
     * The css class name of the modal.
     */
    modalClassName: PropTypes.string,

    /**
     * The styles of the root element.
     */
    style: PropTypes.object,

    parentEl: PropTypes.object,

    /**
     * The drawer alignment.
     */
    position: PropTypes.oneOf(Util.enumerateValue(Position)),

    /**
     * The depth of Paper component.
     */
    depth: PropTypes.number,

    /**
     * If true,the element will disabled.
     */
    disabled: PropTypes.bool,

    /**
     * If true,drawer box will display.
     */
    visible: PropTypes.bool,

    /**
     * If true,the pop-up box will be displayed in the mask layer, or the pop-up box will appear below the element.
     */
    showModal: PropTypes.bool,

    /**
     * If true,when press down mouse the pop-up box will closed.
     */
    isBlurClose: PropTypes.bool,

    isEscClose: PropTypes.bool,

    /**
     * The function of drawer render.
     */
    onRender: PropTypes.func,

    onDestroy: PropTypes.func,
    drawerVisibleHandler: PropTypes.func,

    /**
     * Callback function fired when the popup is requested to be opened.
     */
    onRequestOpen: PropTypes.func,

    /**
     * The function that trigger when click submit.
     */
    onRequestClose: PropTypes.func,

    drawerContent: PropTypes.any

};

DrawerProvider.defaultProps = {

    parentEl: document.body,

    position: Position.LEFT,
    depth: 2,
    disabled: false,
    visible: false,
    showModal: true,

    isBlurClose: true,
    isEscClose: true

};

export default DrawerProvider;
