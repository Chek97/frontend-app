import { types } from "../types/types";


export const setError = (err) => ({
    type: types.setError,
    payload: err
});

export const removeError = () => ({
    type: types.removeError
});

export const setSuccess = (message) => ({
    type: types.setSuccess,
    payload: message
});

export const startLoading = () => ({
    type: types.startLoading
});

export const finishLoading = () => ({
    type: types.finishLoading
});

