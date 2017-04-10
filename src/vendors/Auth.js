function getToken() {
	return sessionStorage.getItem('token') || localStorage.getItem('token');
}

function setToken(isRemember, token) {
	if (isRemember === true) {
		localStorage.setItem('token', token);
		sessionStorage.removeItem('token');
	} else {
		sessionStorage.setItem('token', token);
		localStorage.removeItem('token');
	}
}

function hasToken() {
	return getToken() !== undefined;
}

function removeToken() {
	sessionStorage.removeItem('token');
	localStorage.removeItem('token');
}

export default {
	getToken,
	setToken,
	hasToken,
	removeToken
};