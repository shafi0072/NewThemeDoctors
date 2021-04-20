import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Doctor from './Components/DoctorsFinder/Doctor';
import SignupNdLogin from './Components/Authentication/SignupNdLogin';
import {createContext, useState} from 'react';

export const userContext = createContext()

function App() {

    const [userLogin, setUserLogin] = useState({
        email: '',
        password: '',
        Fname: '',
        Lname: '',
        country: '',
        city: ''
    })

    return (
        <userContext.Provider value={[userLogin, setUserLogin]}>
            <Router className="App">
                <Switch>
                    <Route exact="exact" path='/' component={Home}/>
                    <Route path="/doctor" component={Doctor}/>
                    <Route path='/authentication' component={SignupNdLogin}/>
                </Switch>
            </Router>
        </userContext.Provider>
    );
}

export default App;
