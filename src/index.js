import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.4.0";

// pages for this product
import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import BrowsePage from "views/BrowsePage/BrowsePage.jsx";
import AboutPage from "views/AboutPage/AboutPage.jsx";
import RecordPage from "views/RecordPage/RecordPage.jsx";


var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/components" component={Components} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/add-record" component={LoginPage} />
      <Route path="/browse" component={BrowsePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/record" component={RecordPage} />


      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
