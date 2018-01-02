/**
 * @file TreeCalculation vendor
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import Util from './Util';

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

export default {
    calDepth,
    calPath,
    findNodeById
};