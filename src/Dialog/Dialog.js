/**
 * @file Dialog component
 * @author chao(chao.zhang@derbysoft.com)
 */

import React, {Component} from 'react';

import SubtreeContainer from '../_SubtreeContainer';
import DialogBody from '../_DialogBody/DialogBody';

import Dom from '../_vendors/Dom';

export default class Dialog extends Component {

    static ButtonUITypes = DialogBody.ButtonUITypes;

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

    componentDidMount() {
        this.setBodyLock();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.visible !== this.props.visible) {
            this.setBodyLock(nextProps);
        }
    }

    componentWillUnmount() {
        this.setBodyLock(false);
    }

    render() {

        const {visible} = this.props;

        return (
            <SubtreeContainer visible={visible}>
                <DialogBody {...this.props}/>
            </SubtreeContainer>
        );

    }

};

Dialog.propTypes = DialogBody.propTypes;
Dialog.defaultProps = DialogBody.defaultProps;