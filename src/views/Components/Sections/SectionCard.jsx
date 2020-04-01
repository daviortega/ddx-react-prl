import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import cardStyle from "assets/jss/material-kit-react/views/componentsSections/cardStyle.jsx";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

import { config } from "../../../ddx.config";

class SectionCard extends React.Component {
  state = {
    title: "",
    description: "",
    address: "",
    thumbFile: ""
  };

  componentDidMount() {
    const recordInfo = this.props.data.record.details;
    console.log(recordInfo);
    if (recordInfo) {
      this.setState({
        title:
          recordInfo[config.cardInfo.title.tmpl][config.cardInfo.title.name],
        description:
          recordInfo[config.cardInfo.description.tmpl][
            config.cardInfo.description.name
          ],
        addressDirectory:
          recordInfo[config.cardInfo.addressDirectory.tmpl][
            config.cardInfo.addressDirectory.name
          ],
        thumbnail:
          recordInfo[config.cardInfo.thumbnail.tmpl][
            config.cardInfo.thumbnail.name
          ]
      });
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card} href="/record">
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Record Image"
            className={classes.media}
            height="200"
            image={`${config.ipfs.apiUrl}${this.state.addressDirectory}/${this.state.thumbnail}`}
            title={this.state.title}
          />
          <CardContent>
            <h4>{this.state.title}</h4>
            <p className="nomargin">{this.state.description}</p>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary" href="/record">
            View
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(cardStyle)(SectionCard);
