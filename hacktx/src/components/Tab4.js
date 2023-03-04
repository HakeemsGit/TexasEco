import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import texas from '../Images/Texas.jpg';

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
    height: "calc(100vh - 64px)", // 64px is the height of the AppBar
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px, rgba(0, 0, 0, 0.06) 0px 1px 3px 1px",
  },
  image: {
    width: 300,
    height: 300,
  },
}));

function Tab4() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <img src={texas} alt="Tab4" className={classes.image} />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="h3" gutterBottom>
                    Tab4
                </Typography>
                <Typography variant="body1" gutterBottom>
                  This is the content for Tab 4.
                </Typography>
                <Typography variant="body1" gutterBottom>
                  This is the second paragraph. It can go underneath the image
                  and end on the right hand side of the “main-content” div.
                </Typography>
                <Typography variant="body1" gutterBottom>
                  This is the third paragraph. It will be underneath the second
                  paragraph.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Tab4;