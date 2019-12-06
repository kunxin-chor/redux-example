import {ADD_CUSTOMER} from '../constants/index'

const initialState = {
    customers:[],
    current_logged_in_user:0
}

// all reducers are functions
// 1. PURE functions
// 2. that takes in a state
// 3. and an action
// if we can rootReducer() without any argument,
// then the state argument will be that of the initialState
export default function rootReducer(state=initialState, action)
{
    // cannot change/access global variables
    // cannot modify any variables (arrays, objects) directly
    if (action.type === ADD_CUSTOMER) {
        const cloned = {
            ...state,
            customers: [ ...state.customers, action.payload]
        }
        return cloned;
    }
 
    return state;
}
