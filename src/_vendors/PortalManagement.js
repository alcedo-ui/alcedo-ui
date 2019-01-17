const map = {};

function push(parentEl, portal) {
    if (map[parentEl]) {

    }
}

function pop(parentEl, portal) {

}

function has(parentEl) {
    return parentEl in map;
}

export default {
    push,
    pop,
    has
};
