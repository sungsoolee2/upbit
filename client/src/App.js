import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pricing from "./pages/Pricing";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          {/* we can have this as the catch-all 404 page */}
          <Route exact path="/" component={Pricing} />
          {/* <Route exact path="/books" component={Books} /> */}
          {/* <Route exact path="/books/:id" component={Detail} /> */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
