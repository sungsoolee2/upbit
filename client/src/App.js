import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pricing from "./pages/Pricing";
import Analysis from "./pages/Analysis";

import Navigation from './components/Navigation/index';
import Container from './styles/container.css'
import Home from "./pages/Home";
import PrivateRoute from './PrivateRoute'
import News from "./pages/News";

/************** PASSPORTS ************/
import Login from './components/Login';
import Logout from './components/Logout';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>

<div style={Container}>
    <Navigation/>
        <Switch>
          {/* we can have this as the catch-all 404 page */}
          <Route exact path="/" component={Home} />
          <Route exact path="/news" component={News} />
          <Route exact path="/pricing" component={Pricing} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} /> 
          <Route path="/logout" component={Logout} />
          <Route path="/analysis" component={Analysis} />
        </Switch>
        </div>
    </Router>
    
  );
}

export default App;
