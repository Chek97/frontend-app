import { types } from "../types/types";
import {facebookAuthProvider, firebase, googleAuthProvider} from '../firebase/firebase-config'

export const startLogin = (email, password) => {
    return async(dispatch) => {
        try {
            const {user} = await firebase.auth().signInWithEmailAndPassword(email, password);
            dispatch(login(user.uid, user.displayName)); 
            
        } catch (error) {
            console.error('No se realizo el login', error);
        }
    }
}

export const startGoogleLogin = () => {
    return async(dispatch) => {

        const { user } = await firebase.auth().signInWithPopup(googleAuthProvider);
        dispatch(login(user.uid, user.displayName));
            //.then(userCredential => console.log(userCredential));
            //https://react-login-app-89d67.firebaseapp.com/__/auth/handler
    }
}

export const startFacebookLogin = () => {
    return async(dispatch) => {
        try {
            const { user } = await firebase.auth().signInWithPopup(facebookAuthProvider);
            dispatch(login(user.uid, user.displayName));
            //autenticar con facebook usar app de tipo "ninguno"
                //https://react-login-app-89d67.firebaseapp.com/__/auth/handler
        } catch (error) {
            console.error('No inicio con facebook ', error);
        }
    }
}

const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});

export const startRegister = (email, name, lastName, password) => {
    return async(dispatch) => {
        try {
            const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
            await user.updateProfile({displayName: `${name} ${lastName}`});
            dispatch(login(user.uid, user.displayName));
        } catch (error) {
            console.error('No se puedo registrar ', error);
        }
    }
}