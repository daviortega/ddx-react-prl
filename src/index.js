import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import "assets/scss/material-kit-react.scss?v=1.4.0";

// pages for this product
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import BrowsePage from "views/BrowsePage/BrowsePage.jsx";
import AboutPage from "views/AboutPage/AboutPage.jsx";
import RecordPage from "views/RecordPage/RecordPage.jsx";

import { red, indigo, pink } from "@material-ui/core/colors";
import TermsPage from "./views/TermsPage/TermsPage";

var hist = createBrowserHistory();
// All the following keys are optional.
// We try our best to provide a great default value.
const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: pink,
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2
  },
});

ReactDOM.render(
  <Router history={hist}>
    <MuiThemeProvider theme={theme}>
      <Switch>
        <Route path="/profile-page" component={ProfilePage} />
        <Route path="/add-record" component={LoginPage} />
        <Route path="/browse" component={BrowsePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/record" component={RecordPage} />
        <Route path="/terms" component={TermsPage} />

        <Route path="/" component={LandingPage} />
      </Switch>
    </MuiThemeProvider>
  </Router>,
  document.getElementById("root")
);
