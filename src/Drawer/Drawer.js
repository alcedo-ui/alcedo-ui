/**
 * @file Drawer component
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';

// Components
import PositionPop from '../_PositionPop';
import Paper from '../Paper';

// Statics
import Theme from '../Theme';
import Position from '../_statics/Position';

// Vendors
import {findDOMNode} from 'react-dom';
import classNames from 'classnames';
import domContains from 'dom-helpers/contains';
import Dom from '../_vendors/Dom';
import Util from '../_vendors/Util';
import Event from '../_vendors/Event';
import PopManagement from '../_vendors/PopManagement';

class Drawer extends Component {

    static Theme = Theme;
    static Position = Position;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.drawerContent = createRef();

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!prevProps.visible && this.props.visible) {
            Event.addEvent(document, 'click', this.handleClose);
        } else if (prevProps.visible && !this.props.visible) {
            Event.removeEvent(document, 'click', this.handleClose);
        }
    }

    componentWillUnmount() {
        Event.removeEvent(document, 'click', this.handleClose);
        PopManagement.pop(this);
    }

    drawerVisibleHandler = (el, drawerEl, currentVisible, isBlurClose) => {

        // el is missing
        if (el && !domContains(document, el)) {
            return currentVisible;
        }

        if (drawerEl && el && domContains(drawerEl, el)) {
            return currentVisible;
        }

        return isBlurClose ? false : currentVisible;

    };

    handleClose = e => {

        const {visible, isBlurClose, drawerVisibleHandler} = this.props;

        if (!visible) {
            return;
        }

        const drawerEl = findDOMNode(this.drawerContent?.current);
        let currVisible;

        if (drawerVisibleHandler) {
            currVisible = drawerVisibleHandler(e.target, drawerEl, visible, isBlurClose);
        } else if (!Dom.isParent(e.target)) {
            currVisible = this.drawerVisibleHandler(e.target, drawerEl, visible, isBlurClose);
        }

        if (currVisible === false) {
            this.props.onRequestClose?.(e);
        }

    };

    handleRender = (...args) => {

        PopManagement.push(this, {
            shouldLockBody: this.props.showModal
        });

        this.props.onRender?.(...args);

    };

    handleDestroy = (...args) => {
        PopManagement.pop(this);
        this.props.onDestroy?.(...args);
    };

    render() {

        const {

            className, depth,

            // not passing down these props
            // eslint-disable-next-line no-unused-vars
            isBlurClose, isEscClose, onRender, onRequestClose, drawerVisibleHandler,

            ...restProps

        } = this.props;

        return (
            <PositionPop {...restProps}
                         className={classNames('drawer', {
                             [className]: className
                         })}
                         container={<Paper ref={this.drawerContent}/>}
                         depth={depth}
                         onRender={this.handleRender}
                         onDestroy={this.handleDestroy}/>
        );

    }

}

Drawer.propTypes = {

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
     * The function that trigger when click submit.
     */
    onRequestClose: PropTypes.func

};

Drawer.defaultProps = {

    parentEl: document.body,

    position: Position.LEFT,
    depth: 2,
    disabled: false,
    visible: false,
    showModal: true,

    isBlurClose: true,
    isEscClose: true

};

export default Drawer;
