import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import river from '../Images/river.png'
import { Grid } from "@material-ui/core";


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
    width: "80%",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "80%",
    maxHeight: "40%",
  },
  paragraph: {
    textAlign: "left",
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(3),
    marginBottom: theme.spacing(2),
    textIndent: "1em",
  },
}));

function ProtectOurLakes() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h3" gutterBottom>
        Protect Our Lakes
        </Typography>
        <Grid item>
            <img src={river} alt="river" className={classes.image} />
        </Grid>
        <Typography variant="h4" gutterBottom>
        Get Involved Today!
        </Typography>
        <Typography variant="body1" gutterBottom>
        Use this framework to organize a group of volunteers to clean up lake shores and dried up lake beds in the Austin area. This guide includes everything you need to know, from proper clothing to wear and materials needed, to what to do in case of inclement weather or an injury. Let's work together to make a positive, safe impact on our community and environment!
        </Typography>
        <Typography variant="h5" gutterBottom>
        Proper Clothes:
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
        Wear clothes that you don't mind getting dirty or wet, such as old t-shirts and shorts.
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
        Closed-toe shoes or boots are recommended for safety.
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
        Consider wearing gloves to protect your hands while picking up trash.
        </Typography>
        <Typography variant="h5" gutterBottom>
        Materials Needed:
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
        Trash bags, preferably heavy-duty ones that won't tear easily.
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
        Reusable gloves for volunteers to wear if they don't bring their own.
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
        Trash pickers or grabbers to make it easier to pick up trash without having to touch it.
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
        Buckets or containers to collect smaller pieces of debris that won't fit in the trash bags.
        </Typography>
        <Typography variant="h5" gutterBottom>
        Garbage Disposal Equipment:
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
        Check with local authorities or parks to find out if they provide garbage disposal bins or dumpsters for volunteers to use.
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
        If not, arrange to have a truck or trailer to transport the collected trash to a nearby landfill or recycling center.
        </Typography>
        <Typography variant="h5" gutterBottom>
        Food and Water:
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
        Remind volunteers to bring their own water bottles and snacks.
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
        Encourage them to bring a refillable water bottle to reduce waste.
        </Typography>
        <Typography variant="h5" gutterBottom>
        Inclement Weather:
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
        Check the weather forecast ahead of time and reschedule the cleanup if heavy rain or lightning is expected.
        </Typography>

      </Paper>
    </div>
  );
}

export default ProtectOurLakes;
