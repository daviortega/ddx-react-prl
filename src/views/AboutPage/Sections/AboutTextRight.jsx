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
        <Grid item xs={12} sm={6}>
        <img
                  src={"https://countrylakesdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.jpg"
                }
                  alt="..."
                  className={classes.imgabout}
                />        </Grid>
        <Grid item xs={12} sm={6}
       >
          
          <h3 className={classes.h3bold}>Learning more</h3>
          <p className={classes.aboutp}>If you are interested in learning more about electron tomography, this database, or other research conducted by the Jensen Lab please get in touch

Many of these datasets have been used in studies resulting in scientific publications. You can view a list of these publications on the Jensen Lab website.
</p>

<Button variant="contained" color="primary" className={classes.button}>
        Learn More
      </Button>

       </Grid>
       
    
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);