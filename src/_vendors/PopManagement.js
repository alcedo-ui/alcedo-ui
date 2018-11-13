/**
 * @file PopManagement vendor
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import addClass from 'dom-helpers/class/addClass';
import removeClass from 'dom-helpers/class/removeClass';
import hasClass from 'dom-helpers/class/hasClass';

import Dialog from '../Dialog';
import Event from './Event';

const list = [];
let initial = false;

function setBodyLock() {
    const body = document.querySelector('body');
    if (!hasClass(body, 'dialog-modal-lock')) {
        addClass(body, 'dialog-modal-lock');
    }
};

function setBodyUnlock() {
    const body = document.querySelector('body');
    if (hasClass(body, 'dialog-modal-lock')) {
        removeClass(body, 'dialog-modal-lock');
    }
};

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
    if (!initial) {
        Event.addEvent(document, 'keydown', keyDownHandler);
        initial = true;
    }
}

function getIndex(context) {
    return context && list && list.length > 0 ?
        list.findIndex(item => item && item == context)
        :
        -1;
}

function has(context) {
    return getIndex(context) !== -1;
}

function pop(context) {

    if (list.length < 1) {
        return;
    }

    const index = getIndex(context);
    if (index > -1) {
        list.splice(index, 1);
    }

    // remove body lock
    if (list.findIndex(item => item && item instanceof Dialog && item.props && item.props.showModal) === -1) {
        setBodyUnlock();
    }

}

function push(context) {

    if (!has(context)) {

        list.push(context);

        // if it is Dialog, set body lock
        if (context instanceof Dialog && context.props.showModal) {
            setBodyLock();
        }

    }

}

addKeyDownEvent();

export default {
    getIndex,
    has,
    push,
    pop
};
