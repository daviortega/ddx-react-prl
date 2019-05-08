import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import image from "assets/img/faces/avatar.jpg";

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0,0,0,.125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  },
  expanded: {
    margin: 'auto',
  },
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0,0,0,.03)',
    borderBottom: '1px solid rgba(0,0,0,.125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(props => <MuiExpansionPanelSummary {...props} />);

ExpansionPanelSummary.muiName = 'ExpansionPanelSummary';

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing.unit * 2,
  },
}))(MuiExpansionPanelDetails);

class CustomizedExpansionPanel extends React.Component {
  state = {
    expanded: 'panel1',
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { expanded } = this.state;
    return (
      <div>
        <ExpansionPanel
          square
          expanded={expanded === 'panel1'}
          onChange={this.handleChange('panel1')}
        >
          <ExpansionPanelSummary>
            <Typography>What is this database?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            The Caltech Tomography Database is a public repository of 11293 cryo-electron tomography datasets (tilt-series and reconstructions) of cells. These datasets were acquired by the Jensen Lab at Caltech over the past 15 years. Currently, 85 species of bacteria and archaea are represented, and this number will keep climbing.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          square
          expanded={expanded === 'panel2'}
          onChange={this.handleChange('panel2')}
        >
          <ExpansionPanelSummary>
            <Typography>What was this data collected?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            Cryo-electron tomography reveals the ultrastructural (beyond the resolution of standard light microscopy) details of cells in an essentially native state. These details can answer many open questions in cell biology. What novel structures can we find inside cells? For the structures we already know about, what do they look like at high-resolution inside the cell and where are they found? Often, insights into the function of a cellular machine come immediately from looking at its structure.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          square
          expanded={expanded === 'panel3'}
          onChange={this.handleChange('panel3')}
        >
          <ExpansionPanelSummary>
            <Typography>Have any scientific discoveries been made with this data?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            These tomograms helped reveal the existence and variety of prokaryotic cytoskeletons and many of the macromolecular machines that power motility, warfare, and other complex behaviors of bacterial and archaeal cells. For a list of the scientific papers that resulted from these tomograms, click here.

            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default CustomizedExpansionPanel;