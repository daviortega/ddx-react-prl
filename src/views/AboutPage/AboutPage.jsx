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

import SectionPills from "/Users/Prudence/repos/ddx-react-prl/src/views/Components/Sections/SectionPills.jsx";

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
        <Parallax className={classes.about} 
        filter image={require("assets/img/roverbg.jpg")}>
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
<h2>About Electron tomography</h2>
Electron tomography is a form of transmission electron microscopy in which a sample is tilted during imaging, typically one or two degrees between images, building up a "tilt-series" of images that can be computationally reconstructed into a 3D view of the sample, or "tomogram." In essence, electron tomography takes a CT scan of a cell.

Currently, the majority of tomograms in the ETDB were acquired by cryo-EM, in which cells in standard growth media are plunged into a cryogen that freezes them so rapidly that the water molecules don't have a chance to rearrange into a crystalline lattice, preserving cell structures in vitreous, or glass-like, amorphous ice. Vitrified cells can be imaged directly by electron tomography, without the need for fixation, dehydration, resin-embedding or staining. This captures the cells in an essentially native state.
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(aboutPageStyle)(AboutPage);
