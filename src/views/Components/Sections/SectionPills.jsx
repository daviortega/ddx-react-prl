import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";



// core components
import pillsStyle from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.jsx";
import Grid from '@material-ui/core/Grid';
import SectionCard from "/Users/Prudence/repos/ddx-react-prl/src/views/Components/Sections/SectionCard.jsx"


  
  
class SectionPills extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="navigation-pills">
            <div className={classes.title}>
              <h2>Newest Records:</h2>
            </div>
            <div className={classes.root}>
      <Grid container spacing={24}>
       
       
        <Grid item xs={6} sm={3}>
        <SectionCard />
        </Grid>

        <Grid item xs={6} sm={3}>
        <SectionCard />
        </Grid>

        <Grid item xs={6} sm={3}>
        <SectionCard />
        </Grid>

        <Grid item xs={6} sm={3}>
        <SectionCard />
        </Grid>

        <Grid item xs={6} sm={3}>
        <SectionCard />
        </Grid>
       
        <Grid item xs={6} sm={3}>
        <SectionCard />
        </Grid>

        <Grid item xs={6} sm={3}>
        <SectionCard />
        </Grid>

        <Grid item xs={6} sm={3}>
        <SectionCard />
        </Grid>

      </Grid>
    </div>



        
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(pillsStyle)(SectionPills);
