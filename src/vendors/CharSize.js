function _setStyles(style) {
	style.width = 'auto';
	style.left = '0px';
	style.visibility = 'hidden';
	style.position = 'absolute';
	style.whiteSpace = 'pre';
	style.font = 'inherit';
	style.overflow = 'visible';
}

function computerCharCount() {
	let result;
	let el = document.createElement('div');
	_setStyles(el.style);
	el.style.width = '0.2px';
	document.documentElement.appendChild(el);
	var width = el.getBoundingClientRect().width;
	if (width > 0 && width < 1) {
		result = 50;
	} else {
		result = 100;
	}
	el.parentNode.removeChild(el);
	return result;
}

export default {
	computerCharCount
};