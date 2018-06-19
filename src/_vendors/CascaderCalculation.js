/**
 * @file CascaderCalculation vendor
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
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

export default {
    getMaxDepth
};