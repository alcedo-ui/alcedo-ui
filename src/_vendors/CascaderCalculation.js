/**
 * @file CascaderCalculation vendor
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import Util from './Util';

/**
 * Whether a node has children
 * @param node
 * @returns {boolean}
 */
function hasChildren(node) {
    return node && node.children && node.children.length > 0 || false;
}

/**
 * Calculate the max depth of current cascader path
 * @param activatedPath
 * @returns {*}
 */
function getMaxDepth(activatedPath) {

    if (!activatedPath || activatedPath.length < 1) {
        return 1;
    }

    const lastNode = activatedPath[activatedPath.length - 1];

    if (!lastNode) {
        return activatedPath.length;
    }

    return lastNode.node && lastNode.node.children && lastNode.node.children.length > 0 ?
        activatedPath.length + 1 : activatedPath.length;

}

/**
 * Calculate the cascader path according to the value
 * @param value
 * @param data
 * @param props
 * @returns {*|*|*}
 */
function calPath(value, data, props) {

    if (!value || !data) {
        return;
    }

    return traverseDataCalPath({children: data}, value, props, data, null);

}

/**
 * Traverse the tree data to Calculate the cascader path
 * @param node
 * @param value
 * @param props
 * @param rootList
 * @param parent
 * @param index
 * @returns {*}
 */
function traverseDataCalPath(node, value, props, rootList, parent, index = 0) {

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
            const path = traverseDataCalPath(node.children[i], value, props, rootList, node, i);

            // if finded in child node
            if (path) {

                if (!parent || parent == rootList) { // root
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

export default {
    hasChildren,
    getMaxDepth,
    calPath
};
