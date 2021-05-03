import { USER_POSTS_STATE_CHANGE, USER_STATE_CHANGE } from "../constants/constants";

const initialState = {
    currentUser: null,
    posts: []
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_STATE_CHANGE:
            console.log(action.payload.currentUser);
            return { ...state, currentUser: action.payload.currentUser };
        case USER_POSTS_STATE_CHANGE:
            return {...state, posts: action.payload};
        default:
            return state;
            
    }
}