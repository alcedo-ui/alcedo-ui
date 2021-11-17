/**
 * @file DropdownCalculation vendor
 */

// Vendors
import Dom from './Dom';

/**
 * @param dropdownEl
 * @param triggerEl
 * @param popupEl
 * @returns {boolean}
 */
export function isAbove(dropdownEl, triggerEl, popupEl) {

    if (!dropdownEl || !triggerEl || !popupEl) {
        return false;
    }

    const {top} = Dom.getOffset(dropdownEl);
    const scrollTop = Dom.getScrollTop();
    const triggerHeight = triggerEl.clientHeight;
    const popupHeight = popupEl.clientHeight;

    return (
        top + triggerHeight + popupHeight - scrollTop > window.innerHeight // bottom overflow
        && top - popupHeight - scrollTop >= 0 // no top overflow
    );

}

export default {
    isAbove
};
