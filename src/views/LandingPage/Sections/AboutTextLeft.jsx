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
          
          <h3 className={classes.h3bold}>Suspendisse ut metus placerat</h3>
          <p className={classes.aboutp}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut ullamcorper orci, ac pretium lectus. Pellentesque lobortis lectus at est viverra, sed pulvinar diam aliquet. Mauris tempus molestie tortor eu pretium. Nunc non nulla magna. Morbi pharetra sem nec sapien consequat rutrum. Ut pharetra mattis orci at suscipit. In dapibus neque nisi, at tincidunt ligula porttitor vel. Sed hendrerit accumsan libero nec mollis.


</p>

<Button variant="contained" color="primary" className={classes.button} href="/about"
>
        Learn More
      </Button>

       </Grid>
        <Grid item xs={12} sm={6}>
        <img
                  src={"https://countrylakesdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.jpgh"
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