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
            result++;
        }
    });

    return result;

}

function isNodeMatched(node, filter, props) {

    if (node[VirtualRoot]) {
        return true;
    }

    const value = Util.getTextByDisplayField(node,
        props && props.displayField || undefined,
        props && props.valueField || undefined);
    return value.toString().toUpperCase().includes(filter.toUpperCase());

}

function filterNode(node, filter, props) {

    if (!node || !filter) {
        return node;
    }

    const result = {...node};
    let hasChildMatched = false;

    if (node.children && node.children.length > 0) {
        result.children = [];
        for (let child of node.children) {
            const filteredChild = filterNode(child, filter, props);
            if (filteredChild) {
                result.children.push(filteredChild);
            }
        }
        if (result.children && result.children.length > 0) {
            hasChildMatched = true;
        }
    }

    return hasChildMatched || isNodeMatched(node, filter, props) ?
        result
        :
        null;

}

function filterData(data, filter, props) {

    if (!filter || !data || data.length < 1) {
        return data;
    }

    const isArrayData = isArray(data),
        result = filterNode(isArrayData ? {[VirtualRoot]: true, children: data} : data, filter, props);

    return isArrayData ?
        result.children
        :
        result;

}

function isCheckedAll(data, value, props = {}) {

    if (!data || !value || value.length < 1) {
        return false;
    }

    return isNodeChecked({children: isArray(data) ? data : [data]}, value, props);

}

function isCheckedIndeterminate(data, value, props = {}) {

    if (!data || !value || value.length < 1) {
        return false;
    }

    return isNodeCheckedIndeterminate({children: isArray(data) ? data : [data]}, value, props);

}

function isNodeChecked(node, value, props = {}) {

    if (!props.isSelectRecursive) {
        return Calculation.isItemChecked(node, value, props);
    }

    let result = true;
    Util.preOrderTraverse(node, currentNode => {
        // leaf node & not checked
        if (currentNode && (!currentNode.children || currentNode.children.length < 1)
            && !Calculation.isItemChecked(currentNode, value, props)) {
            result = false;
            return false;
        }
    });

    return result;

}

function isNodeCheckedIndeterminate(node, value, props) {

    if (!props.isSelectRecursive) {
        return Calculation.isItemIndeterminate(node, value, props);
    }

    let total = 0,
        count = 0;
    Util.preOrderTraverse(node, currentNode => {
        // leaf node & not checked
        if (currentNode && (!currentNode.children || currentNode.children.length < 1)) {
            total++;
            if (Calculation.isItemChecked(currentNode, value, props)) {
                count++;
            }
        }
    });

    return count > 0 && count < total;

}

function removeAllNode(data, value, props = {}) {

    if (!data || !value) {
        return value;
    }

    const {valueField, displayField} = props;
    Util.preOrderTraverse(isArray(data) ? {[VirtualRoot]: true, children: data} : data, node => {
        if (!(VirtualRoot in node)) {
            const index = value.findIndex(item => Util.isValueEqual(node, item, valueField, displayField));
            if (index !== -1) {
                value.splice(index, 1);
            }
        }
    });

    return value;

}

export default {
    calDepth,
    calPath,
    findNodeById,
    addRecursiveValue,
    updateValue,
    getTotalCount,
    filterData,
    isCheckedAll,
    isCheckedIndeterminate,
    isNodeChecked,
    isNodeCheckedIndeterminate,
    removeAllNode
};
