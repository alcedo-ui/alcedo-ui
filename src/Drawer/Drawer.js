/**
 * @file Drawer component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import PositionPop from '../_PositionPop';
import Paper from '../Paper';
import Theme from '../Theme';

import Dom from '../_vendors/Dom';
import Util from '../_vendors/Util';
import Position from '../_statics/Position';

class Drawer extends Component {

    static Theme = Theme;
    static Position = Position;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.setBodyLock = this::this.setBodyLock;

    }

    setBodyLock(props = this.props) {

        if (!props) {
            return;
        }

        props.showModal && Dom.toggleClass(document.querySelector('body'), 'drawer-modal-lock', props.visible);

    }

    resetBody() {
        Dom.removeClass(document.querySelector('body'), 'drawer-modal-lock');
    }

    componentDidMount() {
        this.setBodyLock();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.visible !== this.props.visible) {
            this.setBodyLock(nextProps);
        }
    }

    componentWillUnmount() {
        this.resetBody();
    }

    render() {

        const {

                children,

                className, modalClassName, position, disabled, showModal, isLoading, visible,

                // not passing down these props
                isBlurClose, isEscClose,
                onRender, onRequestClose,

                ...restProps

            } = this.props,

            dialogClassName = classNames('drawer', {
                [className]: className
            });

        return (
            <PositionPop {...restProps}
                         className={dialogClassName}
                         position={position}
                         visible={visible}
                         container={<Paper depth={6}></Paper>}
                         showModal={showModal}
                         modalClassName={modalClassName}>
                <div className="drawer-content">
                    {children}
                </div>
            </PositionPop>
        );

    }

};

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

    /**
     * The drawer alignment.
     */
    position: PropTypes.oneOf(Util.enumerateValue(Position)),

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

    isLoading: PropTypes.bool,

    isEscClose: PropTypes.bool,

    /**
     * The function of drawer render.
     */
    onRender: PropTypes.func,

    /**
     * The function that trigger when click submit.
     */
    onRequestClose: PropTypes.func

};

Drawer.defaultProps = {

    className: null,
    modalClassName: null,
    style: null,

    position: Position.LEFT,
    disabled: false,
    visible: false,
    showModal: true,

    isBlurClose: false,
    isLoading: false,
    isEscClose: true

};

export default Drawer;