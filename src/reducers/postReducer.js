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
        case types.getFavorite:
            return {
                ...state,
                favorites: action.payload
            }
        case types.delteFavorite:
           return {
               ...state,
               favorites: state.favorites.filter(fav => fav.id !== action.payload)
           }     
        default:
            return state;
    }
}