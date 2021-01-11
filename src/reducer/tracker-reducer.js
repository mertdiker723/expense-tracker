import { Types } from '../action/action-type.js';


export function trackerReducer(state = [], action) {
    switch (action.type) {
        case Types.ADD_TRANSACTION:
            return [...state, action.transaction];
        case Types.DELETE_TRANSACTION:
            return state.filter(item => item.id !== action.id);
        default:
            return state;
    }
}
