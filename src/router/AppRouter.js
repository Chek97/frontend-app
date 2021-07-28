import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
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
import { UpdateForm } from '../components/UpdateForm';
import { PostForm } from '../components/PostForm';

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
            <div className="progress">
                <CircularProgress className="progress-check" />
            </div>
        )
    }

    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <PrivateRoute exact path="/landing" component={LandingPage} isAuth={loggin} />
                    <PrivateRoute exact path="/list" component={MainList} isAuth={loggin} />
                    <PrivateRoute exact path="/updatePost" component={UpdateForm} isAuth={loggin} />
                    
                    <PrivateRoute exact path="/api/formData/:action" component={PostForm} isAuth={loggin} />


                    <Redirect to="/login" />
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}
