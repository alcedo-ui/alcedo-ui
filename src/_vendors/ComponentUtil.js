function getDerivedState(props, state, key) {

    if (!props || !state || !key) {
        return;
    }

    const prevProps = state.prevProps;

    return prevProps ?
        prevProps[key] !== props[key] ?
            props[key]
            :
            state[key]
        :
        props[key];

}

export default {
    getDerivedState
};
