import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import cardStyle from "assets/jss/material-kit-react/views/componentsSections/cardStyle.jsx";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';



class SectionCard extends React.Component {
  render() {
    const { classes } = this.props;
    return (
     
            <Card className={classes.card}
            href="/record">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Record Image"
          className={classes.media}
          height="200"
          image="https://countrylakesdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.jpg"
          title="Record Image"
        />
        <CardContent>
            <h4>Record Title</h4>
            <p className="nomargin">Record Meta</p>

        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary" href="/record"
>
          View
        </Button>
      </CardActions>
    </Card>

    );
  }
}

export default withStyles(cardStyle)(SectionCard);
