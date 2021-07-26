import { types } from "../types/types";
import {facebookAuthProvider, firebase, googleAuthProvider} from '../firebase/firebase-config'
import { finishLoading, setSuccess, startLoading } from "./ui";

export const startLogin = (email, password) => {
    return async(dispatch) => {
        try {
            dispatch(startLoading());
            const {user} = await firebase.auth().signInWithEmailAndPassword(email, password);
            dispatch(finishLoading());
            dispatch(login(user.uid, user.displayName)); 
        } catch (error) {
            console.error('No se realizo el login', error);
            dispatch(finishLoading());
        }
    }
}

export const startGoogleLogin = () => {
    return async(dispatch) => {
        try {
            dispatch(startLoading());
            const { user } = await firebase.auth().signInWithPopup(googleAuthProvider);
            dispatch(finishLoading());
            dispatch(login(user.uid, user.displayName));
        } catch (error) {
            console.error('No inicio con google ', error);
            dispatch(finishLoading());
        }
            //.then(userCredential => console.log(userCredential));
            //https://react-login-app-89d67.firebaseapp.com/__/auth/handler
    }
}

export const startFacebookLogin = () => {
    return async(dispatch) => {
        try {
            dispatch(startLoading());
            const { user } = await firebase.auth().signInWithPopup(facebookAuthProvider);
            dispatch(finishLoading());
            dispatch(login(user.uid, user.displayName));
            //autenticar con facebook usar app de tipo "ninguno"
                //https://react-login-app-89d67.firebaseapp.com/__/auth/handler
        } catch (error) {
            console.error('No inicio con facebook ', error);
            dispatch(finishLoading());
        }
    }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});

export const startRegister = (email, name, lastName, password) => {
    return async(dispatch) => {
        try {
            dispatch(startLoading());
            const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
            await user.updateProfile({displayName: `${name} ${lastName}`});
            dispatch(finishLoading());
            dispatch(setSuccess('Usuario creado con exito'));
            dispatch(login(user.uid, user.displayName));
        } catch (error) {
            console.error('No se puedo registrar ', error);
            dispatch(finishLoading());
        }
    }
}

export const startLogout = () => {
    return async(dispatch) => {
        try {
            await firebase.auth().signOut();
            dispatch(logout());
        } catch (error) {
            console.error('No se termino la session ', error);  
        }
    }
}

export const logout = () => ({
    type: types.logout
});