import isEqual from 'lodash/isEqual';

function getDerivedState(props, state, key) {

    if (!props || !state || !key) {
        return;
    }

    const prevProps = state.prevProps;

    return prevProps ?
        isEqual(prevProps[key], props[key]) ?
            state[key]
            :
            props[key]
        :
        props[key];

}

export default {
    getDerivedState
};
