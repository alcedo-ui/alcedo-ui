import {LOCATION_CHANGE} from 'react-router-redux';

const initialState = {};

function router(state = initialState, action) {
	switch (action.type) {

		case LOCATION_CHANGE: {
			return state;
		}

		default:
			return state;

	}
}

export default router;