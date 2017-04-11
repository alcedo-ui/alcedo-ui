function addEvent(el, type, cb) {
	if (typeof window.addEventListener === 'function') {
		el.addEventListener(type, cb, false);
	} else if (typeof document.attachEvent === 'function') {
		el.attachEvent(`on${type}`, cb);
	} else {
		el[`on${type}`] = cb;
	}
}

function removeEvent(el, type, cb) {
	if (typeof window.removeEventListener === 'function') {
		el.removeEventListener(type, cb, false);
	} else if (typeof document.detachEvent === 'function') {
		el.detachEvent(`on${type}`, cb);
	} else {
		el[`on${type}`] = null;
	}
}

function triggerPopupEventHandle(el, triggerEl, popupEl, currentVisible) {

	let flag = true;
	// debugger
	while (el) {
		if (el == popupEl) {
			return currentVisible;
		} else if (el == triggerEl) {
			return !currentVisible;
		}
		el = el.parentNode;
	}

	if (flag) {
		return false;
	}

}

export default {
	addEvent,
	removeEvent,
	triggerPopupEventHandle
};