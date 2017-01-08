import actionTypes from '../actions/actionTypes';
const initialState = {
    data: []
};

export default function vendorData(state = initialState, action) {
    switch(action.type) {
        case "SAVE_VENDOR_DATA": {
            let newList = state.data;
            let whichItem = state.data.findIndex((item) => item.id == action.data.itemId);
            if(whichItem >= 0) {
                let vendorIdx = state.data[whichItem].variants.findIndex((item) => item.id == action.data.vendorId);
                if(vendorIdx >= 0) {
                    newList[whichItem].variants[vendorIdx].price = action.data.price;
                } else {
                    newList[whichItem].variants.push({
                        id: action.data.vendorId,
                        vendor: action.data.vendor,
                        price: action.data.price
                    })
                }
            } else {
                newList.push({
                    id: action.data.itemId,
                    name: action.data.name,
                    variants: [{
                        id: action.data.vendorId,
                        vendor: action.data.vendor,
                        price: action.data.price
                    }]
                });
            }
            return Object.assign({}, state, {
                data: newList
            });
        }

        default: {
            return state;
        }
    }
}
