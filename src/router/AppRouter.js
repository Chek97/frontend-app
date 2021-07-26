import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { LandingPage } from '../components/LandingPage';
import { Login } from '../components/Login';
import { MainList } from '../components/MainList';
import { Register } from '../components/Register';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import {firebase} from '../firebase/firebase-config';
import { useDispatch } from 'react-redux';
import {login} from '../actions/auth';
import { CircularProgress } from '@material-ui/core';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {

    const dispatch = useDispatch();
    const [check, setCheck] = useState(true);
    const [loggin, setLoggin] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if(user?.uid){
                setLoggin(true);
                dispatch(login(user.uid, user.displayName));
            }else{
                setLoggin(false);
            }
            setCheck(false);
        });
    }, [dispatch, setCheck, setLoggin]);

    if(check){
        return (
            <CircularProgress />
        )
    }

    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <PrivateRoute exact path="/list" component={MainList} isAuth={loggin} />
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}
