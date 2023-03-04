import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import travis from '../Images/laketravis.jpg';
import austin from '../Images/austinlake.png';
import canyon from '../Images/canyonlake.png';


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

function AustinLakes() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>

                <Typography variant="h2" gutterBottom>
                  Austin Lakes
                </Typography>

                <Typography variant="h4" gutterBottom>
                 Lake Travis
                </Typography>
                <Grid item>
                    <img src={travis} alt="river" className={classes.image} />
                </Grid>
                <Typography variant="body1" gutterBottom>
                Lake Travis is a popular destination in Austin, Texas, known for its vibrant boating and water sports culture. The lake features several marinas, yacht clubs, and party barges for visitors to enjoy. In addition to boating, the lake also supports kayaking, paddleboarding, and even cliff jumping in certain areas such as Pace Bend. The lake was created in 1942 with the construction of the Mansfield Dam by the Lower Colorado River Authority (LCRA).
                </Typography>



                <Typography variant="h4" gutterBottom>
                Lake Austin
                </Typography>
                <Grid item>
                    <img src={austin} alt="river" className={classes.image} />
                </Grid>
                <Typography variant="body1" gutterBottom>
                Lake Austin is a popular recreational spot for locals and visitors alike, offering opportunities for boating, kayaking, and stand-up paddleboarding, as well as fishing and swimming. Visitors can also witness the famous bat colony under the Congress bridge at sunset, or take in the stunning views of the Pennybacker Bridge and Mount Bonnell. The lake is also home to several famous parks, including Zilker Park, Red Bud Isle, and Emma Long Metropolitan Park.
                </Typography>



                <Typography variant="h4" gutterBottom>
                Canyon Lake
                </Typography>
                <Grid item>
                    <img src={canyon} alt="river" className={classes.image} />
                </Grid>
                <Typography variant="body1" gutterBottom>
                Canyon Lake is a reservoir created in 1964 by the construction of Canyon Dam on the Guadalupe River in Texas. It is a popular spot for boating, fishing, and swimming, with eight parks and several marinas offering boat rentals and launch services. Nearby attractions include the Canyon Lake Gorge, a natural area that showcases the geology and ecology of the region, and the Comal River, known for its tubing and water recreation. The lake also hosts several events throughout the year, including the annual Fourth of July Fireworks and Freedom Festival.
                </Typography>


              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default AustinLakes;