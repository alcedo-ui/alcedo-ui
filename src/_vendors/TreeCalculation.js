/**
 * @file TreeCalculation vendor
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import isArray from 'lodash/isArray';

import VirtualRoot from '../_statics/VirtualRoot';

import Util from './Util';
import Calculation from './Calculation';

function calDepth(data, path) {

    let list = data,
        depth = 0;

    if (!data || !path) {
        return depth = 0;
    }

    for (let item of path) {
        if (item.index in list) {
            list = list[item.index].children;
            depth++;
        } else {
            return depth;
        }
    }

    if (list && list.length > 0) {
        return depth + 1;
    }

    return depth;

}

function calPath(value, data, props) {

    if (!value || !data) {
        return;
    }

    return traverseDataCalPath(data, value, props, null);

}

function traverseDataCalPath(node, value, props, parent, index = 0) {

    if (!node || node.length < 1 || !value) {
        return;
    }

    const {valueField, displayField} = props;

    if (Util.getValueByValueField(node, valueField, displayField)
        === Util.getValueByValueField(value, valueField, displayField)) {

        if (!parent) { // root
            return null;
        } else {
            return [{
                node,
                index
            }];
        }

    }

    // find in children
    if (node.children && node.children.length > 0) {

        for (let i = 0, len = node.children.length; i < len; i++) {

            // traverse child node
            const path = traverseDataCalPath(node.children[i], value, props, node, i);

            // if finded in child node
            if (path) {

                if (!parent) { // root
                    return path;
                }

                path.unshift({
                    node,
                    index
                });
                return path;

            }

        }
    }

    return;

}

function findNodeById(node, id, callback, index = null, parent = null) {

    if (!node) {
        return;
    }

    if (('' + node.id) === ('' + id)) {
        callback && callback(node, index, parent);
        return true;
    }

    if (node.children && node.children.length > 0) {
        for (let i = 0, len = node.children.length; i < len; i++) {
            if (findNodeById(node.children[i], id, callback, i, node)) {
                return;
            }
        }
    }

}

function addRecursiveValue(node, value, props) {

    if (!node || !value) {
        return;
    }

    if (!Calculation.isItemChecked(node, value, props)) {
        value.push(node);
    }

    if (!node.children || node.children.length < 1) {
        return;
    }

    for (let item of node.children) {
        addRecursiveValue(item, value, props);
    }

}

/**
 * traverse tree data to update value when multi recursive select
 * @param value
 * @returns {Array}
 */
function updateValue(value, props) {

    const {data, valueField, displayField} = props;
    let result = [];

    Util.postOrderTraverse(isArray(data) ? {[VirtualRoot]: true, children: data} : data, node => {
        if (!(VirtualRoot in node)) {
            if (!node.children || node.children.length < 1) {
                if (value.findIndex(item =>
                    Util.getValueByValueField(item, valueField, displayField)
                    === Util.getValueByValueField(node, valueField, displayField)) > -1) {
                    result.push(node);
                }
            } else {
                if (node.children.every(child => result.findIndex(item =>
                    Util.getValueByValueField(item, valueField, displayField)
                    === Util.getValueByValueField(child, valueField, displayField)) > -1)) {
                    result.push(node);
                }
            }
        }
    });

    return result;

}

function getTotalCount(data) {

    if (!data) {
        return 0;
    }

    let result = 0;

    Util.preOrderTraverse(isArray(data) ? {[VirtualRoot]: true, children: data} : data, node => {
        if (!(VirtualRoot in node)) {
            if (node.children && node.children.length > 0) {
                result += node.children.length;
            }
        }
    });

    return result + 1;

}

export default {
    calDepth,
    calPath,
    findNodeById,
    addRecursiveValue,
    updateValue,
    getTotalCount
};
