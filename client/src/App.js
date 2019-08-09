import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pricing from "./pages/Pricing";
// import Navigation from './components/Navigation';
import Home from "./pages/Home";
// import PrivateRoute from './lib/PrivateRoute'

/************** PASSPORTS ************/
// import Login from './components/Login';
// import Logout from './components/Logout';
// import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <div>
      {/* <Navigation/> */}
      <main>
        <Switch>
          {/* we can have this as the catch-all 404 page */}
          <Route exact path="/" component={Home} />
          <Route exact path="/pricing" component={Pricing} />
          {/* <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} /> 
           <Route path="/logout" component={Logout} /> */}

        </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
