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
        case types.addPost:
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }
        case types.updatePost:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if(post.id === action.payload.id){
                        return action.payload;
                    }else{
                        return post;
                    }
                })
            }
        case types.deletePost:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload)
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