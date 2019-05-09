import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

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
            <Typography>Question one</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            Mauris suscipit sit amet lectus quis congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin pharetra, tellus et tempor posuere, lorem justo consectetur justo, in maximus ligula enim eu arcu. Aenean ornare magna nec nibh pharetra tincidunt. Aenean sit amet diam euismod, convallis enim id, lacinia mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam tincidunt nibh sem, tristique condimentum leo vestibulum eu. Vivamus vel leo pharetra, feugiat dui a, consectetur est. Aliquam finibus mauris sed commodo feugiat. In quis neque a neque aliquet bibendum. Fusce nec ultrices ante. Suspendisse pretium diam quis urna commodo fringilla. Nam tortor sapien, tristique ut odio nec, pretium interdum sapien.

</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          square
          expanded={expanded === 'panel2'}
          onChange={this.handleChange('panel2')}
        >
          <ExpansionPanelSummary>
            <Typography>Question two</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            Duis eu quam a tortor condimentum accumsan. Maecenas eu faucibus velit. Mauris sed lacinia mi. Nam pharetra maximus nibh, porta gravida purus ullamcorper ac. Vestibulum vestibulum diam nisi, eget tincidunt ante mattis eget. Nullam quis dignissim sem, nec scelerisque lacus. Morbi molestie ultricies dui, id ullamcorper quam aliquam quis. Ut aliquam euismod nisi quis venenatis.

</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          square
          expanded={expanded === 'panel3'}
          onChange={this.handleChange('panel3')}
        >
          <ExpansionPanelSummary>
            <Typography>Question three</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat leo ac felis ornare, et scelerisque arcu elementum. Suspendisse sit amet urna dictum, auctor nisl et, porta lorem. Praesent ac mattis felis. Etiam tincidunt consequat est, in ornare enim cursus fermentum. Morbi enim quam, molestie quis ornare quis, viverra quis diam. In sit amet ullamcorper sapien, elementum placerat neque. Mauris euismod accumsan libero, sed sagittis dui placerat vitae. Maecenas accumsan finibus eros, eu tempor nunc aliquet at. Phasellus lacus massa, sodales id mi sit amet, dignissim tempus augue. Pellentesque eu orci ut lectus ultricies hendrerit. Suspendisse quis turpis augue.


            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default CustomizedExpansionPanel;