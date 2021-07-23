import { types } from "../types/types";

const initial = {
    uid: null,
    name: null
}

export const authReducer = (state = initial, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                uid: action.payload.uid,
                name: action.payload.displayName
            }
        default:
            return state;
    }
}