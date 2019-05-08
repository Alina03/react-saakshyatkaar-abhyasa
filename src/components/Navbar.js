import React, { Component } from 'react'
import {Link, NavLink} from 'react-router-dom';
import logo from '../logo.svg';
import {ButtonContainer} from './Button';

const navColor = {
   backgroundColor: '#52C4B9'
};

export default class Navbar extends Component {
    render(){
        return(
            <nav className="navbar navbar-expand-sm navbar-dark px-sm-5" style={navColor}>
                
            <Link to="/">
                <img src={logo} alt="store"></img>
            </Link>
            
            <Link to="/login" className="ml-auto">
                <ButtonContainer>
                    Log In
                </ButtonContainer>
            </Link>
            </nav>
        );
    }
}


