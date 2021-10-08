/**
 * @file PopManagement vendor
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

// Vendors
import addClass from 'dom-helpers/addClass';
import removeClass from 'dom-helpers/removeClass';
import hasClass from 'dom-helpers/hasClass';
import Event from './Event';

const list = [];
let initial = false;

/**
 */
function setBodyLock() {
    const body = document.querySelector('body');
    if (!hasClass(body, 'pop-modal-lock')) {
        addClass(body, 'pop-modal-lock');
    }
}

/**
 */
function setBodyUnlock() {
    const body = document.querySelector('body');
    if (hasClass(body, 'pop-modal-lock')) {
        removeClass(body, 'pop-modal-lock');
    }
}

/**
 * @param e
 */
function keyDownHandler(e) {
    if (e.keyCode === 27) { // esc

        const item = list && list.length > 0 ? list[list.length - 1] : null;

        if (item && item.popContext) {
            const {onRequestClose} = item.popContext.props;
            onRequestClose && onRequestClose(e);
        }

    }
}

/**
 */
function addKeyDownEvent() {
    if (!initial) {
        Event.addEvent(document, 'keydown', keyDownHandler);
        initial = true;
    }
}

/**
 * @param popContext
 * @returns {number|number}
 */
function getIndex(popContext) {
    return popContext && list && list.length > 0 ?
        list.findIndex(item => item && item.popContext && item.popContext === popContext)
        :
        -1;
}

/**
 * @param popContext
 * @returns {boolean}
 */
function has(popContext) {
    return getIndex(popContext) !== -1;
}

/**
 * @param popContext
 * @param config
 */
function push(popContext, config) {

    addKeyDownEvent();

    if (!has(popContext)) {

        list.push({
            popContext,
            config
        });

        // if it is Dialog, set body lock
        if (config && config.shouldLockBody) {
            setBodyLock();
        }

    }

}

/**
 * @param popContext
 */
function pop(popContext) {

    if (!popContext) {
        return;
    }

    const index = getIndex(popContext);

    if (index === -1) {
        return;
    }

    list.splice(index, 1);

    // if there is no shouldLockBody pop in list, remove body lock
    if (!list || list.length < 1
        || !list.some(item => item && item.config && item.config.shouldLockBody)) {
        setBodyUnlock();
    }

}

export default {
    getIndex,
    has,
    push,
    pop
};
