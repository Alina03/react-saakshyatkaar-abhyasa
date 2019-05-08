import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import SignUpForm from './pages/SignUpForm';
import LogInForm from './pages/LogInForm';
import '../../src/App.css';

export default class Login extends Component {

    render() {
        return (
            <Router>
            <div className="App">
                <div className="App__Aside">
                    
                </div>
                <div className="App__Form">
                    <div className="FormTitle">
                        <NavLink to="/login" activeClassName="FormTitle__Link--Active" className="FormTitle__Link white-link">Log In</NavLink> 
                        or <NavLink exact to="/sign_up" activeClassName="FormTitle__Link--Active" className="FormTitle__Link white-link">Sign Up</NavLink>
                    </div>

                    <Route exact path="/sign_up" component={SignUpForm}>
                   
                    </Route>
                    <Route path="/login" component={LogInForm}>
                    
                    </Route>
                </div>
            </div>
            </Router>
        );
    }
}