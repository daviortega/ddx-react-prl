import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import exampleStyle from "assets/jss/material-kit-react/views/componentsSections/exampleStyle.jsx";
import Grid from '@material-ui/core/Grid';
import Paginations from "components/Pagination/Pagination.jsx";
import SectionTabs from "./SectionTabs";
import SectionCard from "/Users/Prudence/repos/ddx-react-prl/src/views/Components/Sections/SectionCard.jsx"

class SectionExamples extends React.Component {
  render() {
    const { classes } = this.props;
    return (
        <div className={classes.section}>
          <div className={classes.container}>
            <div id="navigation-pills">
            <SectionTabs />
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
  
  
  
                  <Paginations
                    pages={[
                      { text: "PREV" },
                      { text: 1 },
                      { text: 2 },
                      { active: true, text: 3 },
                      { text: 4 },
                      { text: 5 },
                      { text: "NEXT" }
                    ]}
                    color="danger"
                  />
          
            </div>
          </div>
        </div>
      );
  }
}

export default withStyles(exampleStyle)(SectionExamples);
