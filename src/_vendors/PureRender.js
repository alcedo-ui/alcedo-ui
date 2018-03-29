/**
 * @file PureRender vendor
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import isEqual from 'lodash/isEqual';

function shouldComponentUpdate(nextProps, nextState) {
    return !isEqual(this.props, nextProps) || !isEqual(this.state, nextState);
}

function PureRender(component) {
    if (component.prototype.shouldComponentUpdate === undefined) {
        component.prototype.shouldComponentUpdate = shouldComponentUpdate;
    }
    return component;
}

export default PureRender;