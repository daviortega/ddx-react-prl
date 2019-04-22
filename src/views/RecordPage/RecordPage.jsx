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
import recordPageStyle from "assets/jss/material-kit-react/views/recordPage.jsx";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SectionCarousel from '/Users/Prudence/repos/ddx-react-prl/src/views/Components/Sections/SectionCarousel.jsx'
const dashboardRoutes = [];



class RecordPage extends React.Component {
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
        <Parallax className={classes.small}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Helicobacter pylori</h1>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                Sharing icons
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>


        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
          <Grid container spacing={24}>

        <Grid item xs={6}>
          <img className={classes.recordimage} src="https://countrylakesdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.jpg"></img>
        </Grid>
        <Grid item xs={6}>
         <p><label className={classes.metalabel}>Tilt Series date:</label> February 14th 2014</p> 

<p><label className={classes.metalabel}>Data Taken By:</label> Yiwei Chang</p>

<p><label className={classes.metalabel}>Species / Specimen:</label> Helicobacter pylori</p>

<p><label className={classes.metalabel}>Strain:</label> 26695</p>

<p><label className={classes.metalabel}>Tilt Series Setting:</label> single axis, tilt range: (-60°, 60°), step: 1°, constant angular increment, dosage: 205eV/Å², defocus: -10μm, magnification: 22500x.</p>

<p><label className={classes.metalabel}>Microscope:</label> Caltech Polara</p>

<p><label className={classes.metalabel}>Acquisition Software:</label> UCSFTomo</p>

<p><label className={classes.metalabel}>Processing Software Used:</label> Raptor</p>

<p><label className={classes.metalabel}>Notes: Tilt series notes:</label> grid box: YWC081</p>

<Button
                  color="default"
                  size="sm"
                  href="/profile-page"
                  rel="noopener noreferrer"
                >
                  Download Files
                </Button>
        </Grid>

<SectionCarousel></SectionCarousel>
      </Grid>
         
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(recordPageStyle)(RecordPage);
