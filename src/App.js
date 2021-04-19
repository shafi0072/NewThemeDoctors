import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Doctor from './Components/DoctorsFinder/Doctor';


function App() {
  return (
    <Router className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path = "/doctor" component={Doctor}/>
      </Switch>
    </Router>
  );
}

export default App;
