import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";



// core components
import pillsStyle from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.jsx";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Paginations from "components/Pagination/Pagination.jsx";



const styles = {
    card: {
      maxWidth: 345,
    },
    media: {
      // ⚠️ object-fit is not supported by IE 11.
      objectFit: 'cover',
    },
  };
  
  
class SectionDdxcard extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="navigation-pills">
            <div className={classes.title}>
              <h2>Newest Records:</h2>
            </div>
            <div className={classes.root}>
      <Grid container spacing={24}>
       
       
        <Grid item xs={6} sm={3}>
        <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Record Image"
          className={classes.media}
          height="200"
          image="https://countrylakesdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
            <h4>Record Title</h4>
            <p class="nomargin">Record Meta</p>

        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          View
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
        <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Record Image"
          className={classes.media}
          height="200"
          image="https://countrylakesdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
            <h4>Record Title</h4>
            <p class="nomargin">Record Meta</p>

        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          View
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
        <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Record Image"
          className={classes.media}
          height="200"
          image="https://countrylakesdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
            <h4>Record Title</h4>
            <p class="nomargin">Record Meta</p>

        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          View
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
        <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Record Image"
          className={classes.media}
          height="200"
          image="https://countrylakesdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
            <h4>Record Title</h4>
            <p class="nomargin">Record Meta</p>

        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          View
        </Button>
      </CardActions>
    </Card>
        </Grid>

        <Grid item xs={6} sm={3}>
        <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Record Image"
          className={classes.media}
          height="200"
          image="https://countrylakesdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
            <h4>Record Title</h4>
            <p class="nomargin">Record Meta</p>

        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          View
        </Button>
      </CardActions>
    </Card>
        </Grid>
       
        <Grid item xs={6} sm={3}>
        <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Record Image"
          className={classes.media}
          height="200"
          image="https://countrylakesdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
            <h4>Record Title</h4>
            <p class="nomargin">Record Meta</p>

        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          View
        </Button>
      </CardActions>
    </Card>
        </Grid>
       
        <Grid item xs={6} sm={3}>
        <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Record Image"
          className={classes.media}
          height="200"
          image="https://countrylakesdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
            <h4>Record Title</h4>
            <p class="nomargin">Record Meta</p>

        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          View
        </Button>
      </CardActions>
    </Card>
        </Grid>

         <Grid item xs={6} sm={3}>
        <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Record Image"
          className={classes.media}
          height="200"
          image="https://countrylakesdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
            <h4>Record Title</h4>
            <p class="nomargin">Record Meta</p>

        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          View
        </Button>
      </CardActions>
    </Card>
        </Grid>

      </Grid>
    </div>



                <Paginations
                  pages={[
                    { text: "PREV" },
                    { text: 1 },
                    { text: 2 },
                    { active: true, text: 3 },
                    { text: 4 },
                    { text: 5 },
                    { text: "NEXT" }
                  ]}
                  color="danger"
                />
        
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(ddxcardStyle)(SectionDdxcard);
