import { types } from "../types/types";
import { makeRequest } from "../helpers/request";
import { db } from "../firebase/firebase-config";
import { setError, setSuccess } from "./ui";
import { loadPosts } from "../helpers/loadPosts";

export const startGetPosts = (uid) => {
    return async(dispatch) => {
        try {
            const response = await makeRequest(`https://waco-api.herokuapp.com/api/users/${uid}/post`);
            const { data } = await response.json();

            dispatch(getPosts(data));
        } catch (error) {
            dispatch(setError('No se realizo correctamente la peticion'));
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

export const startAddApiPost = (post) => {
    return async(dispatch) => {
        try {
            const response = await makeRequest('https://waco-api.herokuapp.com/api/posts', post, 'POST');
            const { data } = await response.json();

            post.id = data.id;
            dispatch(addApiPost(post));
            dispatch(setSuccess('El post fue insertado correctamente'));
        } catch (error) {
            dispatch(setError('No se realizo correctamente la peticion'));
        }
    }
}

export const addApiPost = (post) => ({
    type: types.addPost,
    payload: post
});

export const startUpdateApiPost = (post) => {
    return async(dispatch) => {
        try {
            const response = await makeRequest(`https://waco-api.herokuapp.com/api/posts/${post.id}`, post, 'PUT');
            const { data } = await response.json();
            
            dispatch(updateApiPost(data));
            dispatch(setSuccess('El post fue actualizado correctamente'));
        } catch (error) {
            dispatch(setError('No se realizo correctamente la peticion'));
        }
    }
}

export const updateApiPost = (post) => ({
    type: types.updatePost,
    payload: post
});

export const startDeleteApiPost = (id) => {
    return async(dispatch) => {
        try {
            await makeRequest(`https://waco-api.herokuapp.com/api/posts/${id}`, {}, 'DELETE');
            dispatch(deleteApiPost(id));
            dispatch(setSuccess('El post fue eliminado correctamente'));
        } catch (error) {
            dispatch(setError('No se realizo correctamente la peticion'));
        }
    }
}

export const deleteApiPost = (id) => ({
    type: types.deletePost,
    payload: id
});