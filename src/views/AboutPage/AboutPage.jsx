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
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import aboutPageStyle from "assets/jss/material-kit-react/views/aboutPage.jsx";

// Sections for this page
import SectionFaq from "./SectionFaq";
import AboutTextLeft from "./Sections/AboutTextLeft";
import AboutTextRight from "./Sections/AboutTextRight";
import AboutTextFullwidth from "./Sections/AboutTextFullwidth";


const dashboardRoutes = [];



class AboutPage extends React.Component {
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
        <Parallax className={classes.aboutheader} 
        filter image={require("assets/img/short-background-placeholder.jpg")}>
          <div className={classes.container}>
            <GridContainer className={classes.aboutmain}>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>About</h1>
                <h4 className={classes.subtitle}>
                Welcome to the Caltech ETDB, the blockchain-based Web 3.0 database of thousands of electron tomograms.                </h4>
                <br />

              </GridItem>
            </GridContainer>
          </div>
        </Parallax>


        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>

          

<AboutTextFullwidth></AboutTextFullwidth>
<AboutTextLeft></AboutTextLeft>
<AboutTextFullwidth></AboutTextFullwidth>
<AboutTextRight></AboutTextRight>
<h2>FAQ</h2>

<SectionFaq />

          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(aboutPageStyle)(AboutPage);
