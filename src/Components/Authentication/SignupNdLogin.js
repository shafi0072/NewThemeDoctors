import React, {useState} from 'react';
import Nav from '../Shared/Nav';
import Navbar from '../Shared/Navbar';
import './Signup.css'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
firebase.initializeApp(firebaseConfig)


const SignupNdLogin = () => {
    const [signUp, setSignup] = useState({singup: false, login: true})
    const handleSignUpForm = () => {
        let newUser = {
            ...signUp
        }
        newUser.singup = false;
        newUser.login = true;
        setSignup(newUser);
    }
    const handleLogin = () => {
        let newUser = {
            ...signUp
        }
        newUser.singup = true;
        newUser.login = false;
        setSignup(newUser);
    }
    return (
        <div>
            <Nav/>
            <Navbar/>
            <div className="row">
                <div className="col-md-6">
                    {
                        signUp.singup && <div className="signupForm w-2">
                                <form>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input
                                            type="email"
                                            class="form-control"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="Enter email"/>
                                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input
                                            type="password"
                                            class="form-control"
                                            id="exampleInputPassword1"
                                            placeholder="Password"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="Confirm Password">Confirm Password</label>
                                        <input
                                            type="password"
                                            class="form-control"
                                            id="Confirm Password"
                                            placeholder="Confirm Password"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="FName">First Name</label>
                                        <input type="text" class="form-control" id="FName" placeholder="First Name"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="LastName">Last Name</label>
                                        <input type="text" class="form-control" id="LastName" placeholder="Last Name"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="City">City</label>
                                        <input type="text" class="form-control" id="City" placeholder="City"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="Country">Country</label>
                                        <input type="text" class="form-control" id="Country" placeholder="Country"/>
                                    </div>
                                    <button type="submit" class="btn btn-primary mt-3">Submit</button>
                                    <p>If already have an account then <span onClick={handleSignUpForm} className='text-danger dangerCursor'>click for login</span>
                                    </p>
                                </form>
                            </div>
                    } {
                        signUp.login && <div className="loginArea">
                                <form>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input
                                            type="email"
                                            class="form-control"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="Enter email"/>
                                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input
                                            type="password"
                                            class="form-control"
                                            id="exampleInputPassword1"
                                            placeholder="Password"/>
                                    </div>

                                    <button type="submit" class="btn btn-primary mt-3">Submit</button>
                                    <p>if you don't have an account then  <span onClick={handleLogin} className='text-danger dangerCursor'>click me</span>
                                    </p>

                                </form>
                            </div>
                    }
                    </div>
                <div className="col-md-6 authAvatar"></div>
            </div>
        </div>
    );
};

export default SignupNdLogin;