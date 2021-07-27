import { types } from "../types/types";
import { makeRequest } from "../helpers/request";
import { db } from "../firebase/firebase-config";
import { setError, setSuccess } from "./ui";
import { loadPosts } from "../helpers/loadPosts";

export const startGetPosts = () => {
    return async(dispatch) => {
        try {
            const response = await makeRequest('https://waco-api.herokuapp.com/api/posts');
            const { data } = await response.json();

            dispatch(getPosts(data));
        } catch (error) {
            console.error('No se realizo correctamente la peticion');
        }
    }
}

const getPosts = (posts) => ({
    type: types.getPosts,
    payload: posts
});

export const newPost = (title, body) => {
    return async(dispatch, getState) => {
        const uid = getState().auth.uid;
        
        const favoritePost = {
            title,
            body,
            uid
        }

        try {
            await db.collection(`${uid}/favorites/posts`).add(favoritePost);
            dispatch(setSuccess('Agregado a favoritos'));
            dispatch(startFavoritePost(uid));
        } catch (error) {
            dispatch(setError('No se pudo agregar a favoritos'));
        }

    }
}

export const startFavoritePost = (uid) => {
    return async(dispatch) => {
        try {
            const posts = await loadPosts(uid);
            dispatch(setFavoritePost(posts));
        } catch (error) {
            dispatch(setError('No se obtuvieron los favoritos'));
        }
    }
}

export const setFavoritePost = (favorites) => ({
    type: types.getFavorite,
    payload: favorites
});

export const startUpdatePost = (post) => {
    return async(dispatch, getState) => {
        try {
            const {uid} = getState().auth;
            const insertPost = {...post};
            delete insertPost.id;

            await db.doc(`${uid}/favorites/posts/${post.id}`).update(insertPost);
            dispatch(setSuccess('Post actualizado'));
        } catch (error) {
            dispatch(setError('No se actualizo la nota'));
        }
    }
}

export const startDeletePost = (id) => {
    return async(dispatch, getState) => {
        try {
            const uid = getState().auth.uid;
            await db.doc(`${uid}/favorites/posts/${id}`).delete();
            dispatch(setSuccess('Post eliminado'));
            dispatch(deletePost(id));
        } catch (error) {
            dispatch(setError('No se pudo eliminar el post'));
        }
    }
}

export const deletePost = (id) => ({
    type: types.delteFavorite,
    payload: id
});