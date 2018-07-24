/**
 * @file PopManagement vendor
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import Event from './Event';

const list = [];

function callback(e, context) {
    const {onRequestClose} = context.props;
    onRequestClose && onRequestClose(e);
}

function keyDownHandler(e) {
    if (e.keyCode === 27) { // esc

        if (list.length < 1) {
            return;
        }

        callback(e, list.pop());

    }
}

function addKeyDownEvent() {
    Event.addEvent(document, 'keydown', keyDownHandler);
}

function pop(context) {

    if (list.length < 1) {
        return;
    }

    const index = list ? list.findIndex(item => item == context) : -1;
    if (index > -1) {
        list.splice(index, 1);
    }

}

function push(context) {

    pop(context);

    list.push(context);

}

addKeyDownEvent();

export default {
    push,
    pop
};