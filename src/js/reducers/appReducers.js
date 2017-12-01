import * as types from '../constants/ActionTypes';


let initialState = {
    status: 0 
};

const appReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_INIT:
            return Object.assign({}, state, {status:1});
        default:
            return state;
    }
}

export default appReducers;