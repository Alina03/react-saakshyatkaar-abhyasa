import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends Component {

    constructor() {
        super();

        this.state={
            name:'',
            email:'',
            password:''
        };

        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(e){
        let target=e.target;
        let value=target.type==='checkbox' ? target.checked : target.value;
        let name=target.name;

        this.setState({
            [name]:value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

    render() {
        return(
            <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
                <div className="FormField">
                    <label className="FormField__Label" htmlFor="name">Full Name</label>
                    <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} required />
                </div>

                <div className="FormField">
                    <label className="FormField__Label" htmlFor="email">E-mail Address</label>
                    <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} required/>
                </div>

                <div className="FormField">
                    <label className="FormField__Label" htmlFor="password">Password</label>
                    <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} required />
                </div>
             
                <div className="FormField">
                    <button className="FormField__Button mr-20">Sign Up</button> <Link to="/login" className="FormField__Link white-link">I'm already member</Link>
                </div>
            </form>
        </div>  
        );
    }
}

export default SignUpForm;