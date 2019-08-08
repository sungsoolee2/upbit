import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pricing from "./pages/Pricing";
import Navigation from './components/Navigation';


/************** PASSPORTS ************/
// import Login from './components/Login';
// import Logout from './components/Logout';
// import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <div>
      <Navigation/>
        <Switch>
          {/* we can have this as the catch-all 404 page */}
          <Route exact path="/" component={Pricing} />

          {/* <Route path="/signup" component={Signup} /> */}
          {/* <Route path="/login" component={Login} /> */}
          {/* <Route path="/logout" component={Logout} /> */}

        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
