import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import SectionAdvancedsearchfrom from './SectionAdvancedsearchfrom';

export default class FormDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Advanced Search
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Advanced Search</DialogTitle>
          <DialogContent>

<SectionAdvancedsearchfrom></SectionAdvancedsearchfrom>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Submit
            </Button>

          </DialogActions>
        </Dialog>
      </div>
    );
  }
}