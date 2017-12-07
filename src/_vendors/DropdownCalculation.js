/**
 * @file DropdownCalculation vendor
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import Dom from './Dom';

function isAbove(dropdownEl, triggerEl, popupEl) {

    if (!dropdownEl || !triggerEl || !popupEl) {
        return false;
    }

    const {top} = Dom.getOffset(dropdownEl),
        scrollTop = Dom.getScrollTop();

    if (top + triggerEl.clientHeight + popupEl.clientHeight - scrollTop > window.innerHeight) {
        return true;
    }

    return false;

}

export default {
    isAbove
};