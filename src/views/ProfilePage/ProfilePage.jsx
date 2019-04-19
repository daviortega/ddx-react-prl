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
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";
import SectionExamples from "../Components/Sections/SectionExamples";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class ProfilePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

    
    return (
      <div>
        <Header
          color="transparent"
          brand="DDX Template"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        /> 
        
        <Parallax>
        <div className={classes.container}>

        <Grid container justify = "center">
        <TextField
          id="filled-full-width"
          label="Look for a key term"
          style={{ margin: 8 }}
          placeholder="Search..."
          fullWidth
          margin="normal"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
        />
               
                <br />
                <Button color="default" simple>
                  Advanced Search
                </Button>  </Grid>

          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
              

              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
  
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.browse}>
            <div className={classes.container}>
           
   

            <SectionExamples />


            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
