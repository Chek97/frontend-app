import { types } from "../types/types";

const initial = {
    posts: [],
    favorites: []
}

export const postReducer = (state = initial, action) => {
    switch (action.type) {
        case types.getPosts:
            return {
                ...state,
                posts: action.payload
            }    
        default:
            return state;
    }
}