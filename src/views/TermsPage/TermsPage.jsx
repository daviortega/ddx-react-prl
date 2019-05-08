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
import TermsPageStyle from "assets/jss/material-kit-react/views/termsPage.jsx";




const dashboardRoutes = [];



class TermsPage extends React.Component {
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
                <h1 className={classes.title}>Terms & Conditions</h1>
                                <br />

              </GridItem>
            </GridContainer>
          </div>
        </Parallax>


        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>

          
          <p>These images and data have been provided free to the public in hopes of advancing science. All parties are free to use them for research purposes without restriction.</p>

          <p>Publications benefiting from the data should reference Ortega et al. (in preparation). Users may also choose to directly acknowledge the individual, individuals, lab, or institution who collected particular images as well.</p>

          <p>If any party wishes to use the images or data for commercial purposes, please contact Prof. Grant Jensen at jensen(at)caltech.edu. The California Institute of Technology (Caltech) claims copyright to the data and images contained herein under Creative Commons License.</p>

          <p>Images and data are provided “as is,” with no warranties of any kind, including that the use of the images and data infringe any third party intellectual property rights. Note some representations of a small fraction of the data have been published in scientific journals. Some of these journals claim copyright on those particular representations that were shown in the paper as figures, but it is highly unlikely that any new representation would exactly match that already copyrighted.</p>

          <p>Also note that the metadata, including pixel size and electron dosage, of individual tomograms may be incorrect. If these measurements affect your use of the data, please contact us to verify their accuracy.</p>


          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(TermsPageStyle)(TermsPage);
