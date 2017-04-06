import * as apiTypes from 'reduxes/actionTypes';
import {authFailed} from 'reduxes/actions/user/AuthAction';

export default store => next => action => {

    const options = action[apiTypes.CALL_API];
    if (typeof options === 'undefined') {
        return next(action);
    }

    const {api, params, types} = options;
    const actionSuccessCallback = options.successCallback;
    const actionFailureCallback = options.failureCallback;

    const [requestType, successType, failureType] = types;
    // const paramsSuccessCallback = params.successCallback;
    // const paramsFailureCallback = params.failureCallback;

    function actionWith(data) {
        const finalAction = Object.assign({}, action, data);
        delete finalAction[apiTypes.CALL_API];
        return finalAction;
    }

    next(actionWith({type: requestType}));

    api({
        params,
        successCallback(response) {

            next(actionWith({
                type: successType,
                response
            }));

            actionSuccessCallback && actionSuccessCallback(response);
            // paramsSuccessCallback && paramsSuccessCallback();

        },
        failureCallback(response) {

            if (response && response.code && response.code.toString() === '4001') {
                authFailed(next, response);
                return;
            }

            next(actionWith({
                type: failureType,
                error: response && response.data ? response.data : ''
            }));

            actionFailureCallback && actionFailureCallback(response);
            // paramsFailureCallback && paramsFailureCallback();

        }
    });

};