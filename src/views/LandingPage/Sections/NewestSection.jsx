import { OipApi } from "../../../oip/OipApi";
import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import pillsStyle from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.jsx";
import Grid from "@material-ui/core/Grid";
import SectionCard from "views/Components/Sections/SectionCard.jsx";

import { config } from "ddx.config.js";

const api = new OipApi(config.daemonApiUrl);

class SectionPills extends React.Component {
  constructor() {
    super();
    this.state = { records: [] };
  }

  componentDidMount() {
    api.getRecords().then(json => this.setState({ records: json }));
  }

  render() {
    console.log(this.state.records);
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="navigation-pills">
            <div className={classes.title}>
              <h2>Newest Records: {this.state.records.length}</h2>
            </div>
            <div className={classes.root}>
              <Grid container spacing={24}>
                {this.state.records.map((value, index) => {
                  return (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                      <SectionCard data={value} />
                    </Grid>
                  );
                })}
              </Grid>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(pillsStyle)(SectionPills);
