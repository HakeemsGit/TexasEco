import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import penny from '../Images/Penny.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 800,
    border: "1px solid #ccc",
    backgroundColor: "#f2f2f2",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px, rgba(0, 0, 0, 0.06) 0px 1px 3px 1px",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "90%",
    maxHeight: "50%",
  },
  paragraph: {
    textAlign: "left",
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(3),
    marginBottom: theme.spacing(2),
    textIndent: "1em",
  },
}));

function AboutUs() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h3" gutterBottom>
          About Us
        </Typography>
        <Grid item>
          <img src={penny} alt="river" className={classes.image} />
        </Grid>
        <Typography variant="body1" gutterBottom>
          Howdy! This is a simple project completed for a Hackathon centered around environmentalism and sustainability.
          The goal of this application is to simply display data in hopes that people gain some insight into how lakes are doing in Texas.
          Texas Eco was developed in 12 hours during HackTX.

        </Typography>
      
      </Paper>  
    </div>
  );
}

export default AboutUs;
