import React from 'react';
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

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/list" component={MainList} />
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}
