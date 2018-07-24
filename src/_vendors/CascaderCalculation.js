/**
 * @file CascaderCalculation vendor
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import Util from './Util';

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

function calPath(value, data, props) {

    if (!value || !data) {
        return;
    }

    return traverseDataCalPath({children: data}, value, props, data, null);

}

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
    getMaxDepth,
    calPath
};