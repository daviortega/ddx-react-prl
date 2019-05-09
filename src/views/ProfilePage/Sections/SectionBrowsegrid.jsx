import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";



// core components
import pillsStyle from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.jsx";
import Grid from '@material-ui/core/Grid';
import SectionCard from "views/Components/Sections/SectionCard.jsx"
import Paginations from "components/Pagination/Pagination.jsx";
import SectionSort from "./SectionSort";
  
  
class SectionPills extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="navigation-pills">

            <div className={classes.root}>
            <Grid container alignItems="flex-start" justify="flex-end" direction="row">
            <SectionSort className={classes.sort}></SectionSort>     
</Grid>    

      <Grid container spacing={24}>
       
        <Grid item xs={12} sm={6} md={3}>
        <SectionCard />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
        <SectionCard />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
        <SectionCard />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
        <SectionCard />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
        <SectionCard />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
        <SectionCard />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
        <SectionCard />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
        <SectionCard />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
        <SectionCard />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
        <SectionCard />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
        <SectionCard />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
        <SectionCard />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
        <SectionCard />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
        <SectionCard />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
        <SectionCard />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
        <SectionCard />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
        <SectionCard />
        </Grid>
       
        <Grid item xs={12} sm={6} md={3}>
        <SectionCard />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
        <SectionCard />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
        <SectionCard />
        </Grid>

      </Grid>
    </div>


    <Paginations
                  pages={[
                    { text: "PREV" },
                    { active: true,text: 1 },
                    { text: 2 },
                    { text: 3 },
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

export default withStyles(pillsStyle)(SectionPills);
