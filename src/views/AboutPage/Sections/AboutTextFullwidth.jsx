import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

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

aboutfull: {
    background: "#fafafa",
    padding: "20px",
    borderRadius: "3px",
}
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}
       className={classes.aboutfull}>
       
        <Grid item xs={12}>
          
        <h2>About Electron tomography</h2>
<p className={classes.aboutp}>Electron tomography is a form of transmission electron microscopy in which a sample is tilted during imaging, typically one or two degrees between images, building up a "tilt-series" of images that can be computationally reconstructed into a 3D view of the sample, or "tomogram." In essence, electron tomography takes a CT scan of a cell.</p>

<p className={classes.aboutp}>Currently, the majority of tomograms in the ETDB were acquired by cryo-EM, in which cells in standard growth media are plunged into a cryogen that freezes them so rapidly that the water molecules don't have a chance to rearrange into a crystalline lattice, preserving cell structures in vitreous, or glass-like, amorphous ice. Vitrified cells can be imaged directly by electron tomography, without the need for fixation, dehydration, resin-embedding or staining. This captures the cells in an essentially native state.</p>

       </Grid>
       
    
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);