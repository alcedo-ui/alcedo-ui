import addClass from 'dom-helpers/class/addClass';
import removeClass from 'dom-helpers/class/removeClass';

const map = {};

function push(parentEl, portalEl) {

    if (!(parentEl in map)) {
        map[parentEl] = [];
    }

    addClass(parentEl, 'portal-parent');

    map[parentEl].push(portalEl);

}

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
