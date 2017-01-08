import actionTypes from '../actions/actionTypes';
const initialState = {
    data: []
};

export default function vendorData(state = initialState, action) {
    switch(action.type) {
        case "SAVE_VENDOR_DATA": {
            let newList = state.data;
            newList.push(action.data);
            return Object.assign({}, state, {
                data: newList
            });
        }

        default: {
            return state;
        }
    }
}
