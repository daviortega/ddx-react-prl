import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import browsePageStyle from "assets/jss/material-kit-react/views/browsePage.jsx";


// Sections for this page

import SectionPills from "/Users/Prudence/repos/ddx-react-prl/src/views/Components/Sections/SectionPills.jsx";

const dashboardRoutes = [];

class BrowsePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="DDX Template"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax filter image={require("assets/img/roverbg.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Your beautiful blockchain database</h1>
                <h4 className={classes.subtitle}>
                Welcome to the new way to store and share inforamtion and data. Create your own blockchain-based Web 3.0 database of whatever you like.
                </h4>
                <br />
                <Button
                  color="danger"
                  size="lg"
                  href="/profile-page"
                  rel="noopener noreferrer"
                >
                  Browse Database
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>


        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <SectionPills />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(browsePageStyle)(BrowsePage);
