/**
 * @file DropdownCalculation vendor
 */

import Dom from './Dom';

function isAbove(dropdownEl, triggerEl, popupEl) {

    if (!dropdownEl || !triggerEl || !popupEl) {
        return false;
    }

    const {top} = Dom.getOffset(dropdownEl),
        scrollTop = Dom.getScrollTop(),
        triggerHeight = triggerEl.clientHeight,
        popupHeight = popupEl.clientHeight;

    if (
        top + triggerHeight + popupHeight - scrollTop > window.innerHeight // bottom overflow
        &&
        top - popupHeight - scrollTop >= 0 // no top overflow
    ) {
        return true;
    }

    return false;

}

export default {
    isAbove
};
