/**
 * @file Dialog component
 * @author chao(chao.zhang@derbysoft.com)
 */

import React, {Component} from 'react';

import Portal from '../Portal';
import DialogBody from '../_DialogBody/DialogBody';

import Dom from '../_vendors/Dom';

class Dialog extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.setBodyLock = this::this.setBodyLock;

    }

    setBodyLock(props = this.props) {

        if (!props) {
            return;
        }

        props.showModal && Dom.toggleClass(document.querySelector('body'), 'dialog-modal-lock', props.visible);

    }

    resetBody() {
        Dom.removeClass(document.querySelector('body'), 'dialog-modal-lock');
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
        return this.props.visible ?
            <Portal>
                <DialogBody {...this.props}/>
            </Portal>
            :
            null;
    }

};

Dialog.propTypes = DialogBody.propTypes;
Dialog.defaultProps = DialogBody.defaultProps;

export default Dialog;