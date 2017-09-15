/**
 * @file PopupManagement vendor
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import Event from './Event';

const list = [];

function callback(context) {
    context.setState({
        visible: false
    }, () => {
        setTimeout(() => {
            const {onRequestClose} = context.props;
            onRequestClose && onRequestClose();
        }, 250);
    });
}

function keyDownHandler(e) {
    if (e.keyCode === 27) { // esc

        if (list.length < 1) {
            return;
        }

        callback(list.pop());

    }
}

function addKeyDownEvent() {
    Event.addEvent(document, 'keydown', keyDownHandler);
}

function push(context) {

    if (list.length === 0) {
        addKeyDownEvent();
    }

    list.push(context);

}

export default {
    push
};