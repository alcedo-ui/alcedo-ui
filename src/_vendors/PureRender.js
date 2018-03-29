/**
 * @file PureRender vendor
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

function isObject(value) {
    return value != null && typeof value === 'object';
}

function equal(x, y) {

    if (x === y) {
        return true;
    }

    if (x == null || y == null || (!isObject(x) && !isObject(y))) {
        return x !== x && y !== y;
    }

    const xProps = Object.keys(x),
        yProps = Object.keys(y),
        xLen = xProps.length,
        yLen = yProps.length;

    if (xLen !== yLen) {
        return false;
    }

    for (let prop of xProps) {
        if (hasOwnProperty.call(y, prop)) {
            if (!equal(x[prop], y[prop])) {
                return false;
            }
        } else {
            return false;
        }
    }

    return true;

}

function shouldComponentUpdate(nextProps, nextState) {
    return !equal(this.props, nextProps) || !equal(this.state, nextState);
}

function PureRender(component) {
    if (component.prototype.shouldComponentUpdate === undefined) {
        component.prototype.shouldComponentUpdate = shouldComponentUpdate;
    }
    return component;
}

export default PureRender;