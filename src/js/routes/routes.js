import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from '../containers/page/HomePage.js';

class Routes extends Component {
    constructor(props){
        super(props);
    }
    render(){
        let isLogin = false;
        return (
            <div className="app">
                <Switch>
                    <Route exact path="/" render={() => (
                        (isLogin && isLogin!='')? (
                        <Redirect to="/home" />
                        ) : (
                        <Redirect to="/home" />
                        )
                    )}/>
                    <Route path="/home" component={HomePage} />
                </Switch>
            </div>
        )
    }
}

export default Routes;