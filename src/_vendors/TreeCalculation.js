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

    return traverseData(data, value, props, null);

}

function traverseData(node, value, props, parent, index = 0) {

    if (!node || node.length < 1 || !value) {
        return;
    }

    const {valueField, displayField} = props;

    // find in children
    if (node.children && node.children.length > 0) {

        for (let i = 0, len = node.children.length; i < len; i++) {

            // traverse child node
            const path = traverseData(node.children[i], value, props, node, i);

            // if finded in child node
            if (path) {

                if (!parent) {
                    return path;
                }

                path.unshift({
                    value: node,
                    index: index
                });
                return path;

            }

        }
    }

    if (Util.getValueByValueField(node, valueField, displayField)
        === Util.getValueByValueField(value, valueField, displayField)) {
        return [{
            value: node,
            index
        }];
    }

    return;

}

export default {
    calDepth,
    calPath
};