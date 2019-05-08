import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },

  aboutp: {
    fontSize: "18px",
    lineHeight: "1,5",
    marginBottom: "30px",
},

h3bold: {
    fontWeight: "500",
    marginBottom: "20px",
},

imgabout: {
    maxWidth: "100%",
    borderRadius: "10px",
},

aboutleft: {
    margin: "50px 0px",
},
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}
       className={classes.aboutleft}>
       
        <Grid item xs={12} sm={6}
       >
          
          <h3 className={classes.h3bold}>By making this data available, we hope others will use it to fuel their own discoveries.</h3>
          <p className={classes.aboutp}>In addition to its value for cell biologists, the ETDB offers a massive dataset for software developers to develop, test and improve image processing algorithms. We have some ideas for areas particularly ripe for improvement; check them out on the Scientific Challenges page.
</p>

<Button variant="contained" color="primary" className={classes.button}>
        Learn More
      </Button>

       </Grid>
        <Grid item xs={12} sm={6}>
        <img
                  src={"https://countrylakesdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.jpg"
                }
                  alt="..."
                  className={classes.imgabout}
                />        </Grid>
    
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);