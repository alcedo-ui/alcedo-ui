/**
 * @file Drawer component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, createRef} from 'react';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import query from 'dom-helpers/query';

import PositionPop from '../_PositionPop';
import Paper from '../Paper';

import Theme from '../Theme';
import Position from '../_statics/Position';

import Dom from '../_vendors/Dom';
import Util from '../_vendors/Util';
import Event from '../_vendors/Event';
import PopManagement from '../_vendors/PopManagement';

class Drawer extends Component {

    static Theme = Theme;
    static Position = Position;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.closeTimeout = null;
        this.drawerContent = createRef();

    }

    clearCloseTimeout = () => {
        if (this.closeTimeout) {
            clearTimeout(this.closeTimeout);
            this.closeTimeout = null;
        }
    };

    triggerHandler = (el, triggerEl, drawerEl, currentVisible, isBlurClose) => {

        // el is missing
        if (el && !query.contains(document, el)) {
            return currentVisible;
        }

        if ((triggerEl && el && query.contains(triggerEl, el))
            || (drawerEl && el && query.contains(drawerEl, el))) {
            return currentVisible;
        }

        return isBlurClose ? false : currentVisible;

    };

    handleClose = e => {

        const {visible, isBlurClose, triggerEl, triggerHandler, onRequestClose} = this.props,
            drawerEl = this.drawerContent && this.drawerContent.current && findDOMNode(this.drawerContent.current);

        if (!visible || !triggerEl) {
            return;
        }

        let currVisible;

        if (triggerHandler) {
            currVisible = triggerHandler(e.target, triggerEl, drawerEl, visible, isBlurClose);
        } else if (!Dom.isParent(e.target)) {
            currVisible = this.triggerHandler(e.target, triggerEl, drawerEl, visible, isBlurClose);
        }

        if (currVisible === false) {
            this.clearCloseTimeout();
            this.closeTimeout = setTimeout(() => {
                onRequestClose && onRequestClose(e);
            });
        }

    };

    handleRender = (...args) => {

        PopManagement.push(this, {
            shouldLockBody: this.props.showModal
        });

        const {onRender} = this.props;
        onRender && onRender(...args);

    };

    handleDestroy = (...args) => {

        PopManagement.pop(this);

        const {onDestroy} = this.props;
        onDestroy && onDestroy(...args);

    };

    componentDidMount() {
        Event.addEvent(document, 'click', this.handleClose);
    }

    componentWillUnmount() {

        this.clearCloseTimeout();
        Event.removeEvent(document, 'click', this.handleClose);

        PopManagement.pop(this);

    }

    render() {

        const {

            className,

            // not passing down these props
            triggerEl, isBlurClose, isEscClose, onRender, onRequestClose,

            ...restProps

        } = this.props;

        return (
            <PositionPop {...restProps}
                         className={classNames('drawer', {
                             [className]: className
                         })}
                         container={
                             <Paper ref={this.drawerContent}
                                    depth={6}></Paper>
                         }
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

    triggerEl: PropTypes.object,

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
    triggerHandler: PropTypes.func,

    /**
     * The function that trigger when click submit.
     */
    onRequestClose: PropTypes.func

};

Drawer.defaultProps = {

    parentEl: document.body,

    position: Position.LEFT,
    disabled: false,
    visible: false,
    showModal: true,

    isBlurClose: true,
    isEscClose: true

};

export default Drawer;
