import { types } from "../types/types";
import { makeRequest } from "../helpers/request";

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