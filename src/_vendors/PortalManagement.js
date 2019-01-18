import addClass from 'dom-helpers/class/addClass';
import removeClass from 'dom-helpers/class/removeClass';


const map = {};

//parentEl传入需要添加类的节点，portalEl，传入创建的portal节点
function push(parentEl, portalEl) {

    if (!(parentEl in map)) {
        map[parentEl] = [];
    }
    addClass(parentEl, 'portal-parent');
    map[parentEl].push(portalEl);
}

//删除对应的节点，当删除为空的时候，去掉定位的calss
function pop(parentEl, portalEl) {
    map[parentEl].splice(map[parentEl].indexOf(portalEl), 1);
    if (map[parentEl].length < 1) {
        removeClass(parentEl, 'portal-parent');
    }
}

export default {
    push,
    pop
};
