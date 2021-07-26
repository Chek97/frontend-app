import { types } from "../types/types";

const initial = {
    loading: false,
    message: '',
    error: null
}

export const uiReducer = (state = initial, action) => {
    switch (action.type) {
        case types.setError:
            return {
                ...state,
                error: action.payload
            }
        case types.removeError:
            return {
                ...state,
                error: null
            }
        case types.setSuccess: 
            return {
                ...state,
                message: action.payload
            }
        case types.startLoading:
            return {
                ...state,
                loading: true
            }
        case types.finishLoading:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}