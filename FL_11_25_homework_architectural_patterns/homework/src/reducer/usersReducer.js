import {SET_USERS, DELETE_USER, FILTER_USERS} from '../actions/types';

const initialState = {
    users: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
    case SET_USERS:
        return {
            ...state,
            users: action.payload
        };
    case DELETE_USER:
        return {
            ...state,
            users: state.users.filter((user) => user.id !== action.payload)
        };
    case FILTER_USERS:
        return {
            ...state,
            users: state.users.filter((user) => user.name.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1)
        };
    default:
        return state;
    }
};

export default usersReducer;