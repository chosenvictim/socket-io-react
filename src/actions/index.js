import { checkHttpStatus, parseJSON } from './utils';
import actionTypes from './actionTypes';

export default function saveVendorData(data) {
    return function(dispatch) {
        dispatch({ type: actionTypes.SAVING_DATA });
        return fetch(`${REDDIT_URL}/${post}.json`, {
            method: "GET"
        })
        .then(checkHttpStatus)
        .then(parseJSON)
        .then((jsonResponse) => {
            dispatch({
                type: actionTypes.GET_REDDIT_POST_SUCCESS,
                payload: jsonResponse
            });
        })
        .catch((error) => {
            dispatch({
                type: actionTypes.GET_REDDIT_POST_FAILED,
                error: error.message
            });
        })
    }
}
