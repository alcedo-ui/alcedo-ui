import isEqual from 'lodash/isEqual';

function getDerivedState(props, state, ...keys) {

    if (!props || !state || !keys || keys.length < 1) {
        return;
    }

    let propsKey = '',
        stateKey = '';

    if (keys.length === 2) {
        propsKey = keys[0];
        stateKey = keys[1];
    } else {
        propsKey = keys[0];
        stateKey = keys[0];
    }

    const prevProps = state.prevProps;

    return prevProps ?
        isEqual(prevProps[propsKey], props[propsKey]) ?
            state[stateKey]
            :
            props[propsKey]
        :
        props[propsKey];

}

function is(x, y) {
    return x === y ?
        x !== 0 || y !== 0 || 1 / x === 1 / y
        :
        x !== x && y !== y;
}

function isPropsEqual(x, y, excludes) {

    if (is(x, y)) {
        return true;
    }

    if (typeof x !== 'object' || x === null || typeof y !== 'object' || y === null) {
        return false;
    }

    const xKeys = Object.keys(x),
        yKeys = Object.keys(y);

    if (xKeys.length !== yKeys.length) {
        return false;
    }

    for (let i = 0; i < xKeys.length; i++) {

        if (excludes.includes(xKeys[i]) || typeof x[xKeys[i]] === 'function' || typeof y[yKeys[i]] === 'function') {
            continue;
        }

        if (!hasOwnProperty.call(y, xKeys[i]) || !is(x[xKeys[i]], y[xKeys[i]])) {
            return false;
        }

    }

    return true;

}

export default {
    getDerivedState,
    isPropsEqual
};
