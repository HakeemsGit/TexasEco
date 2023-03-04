import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import info from '../Images/info.png';
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

function LakeTrends() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h3" gutterBottom>
        Lake Trends
        </Typography>
        <Grid item>
                    <img src={info} alt="river" className={classes.image} />
        </Grid>

        <div className={classes.imageContainer}>
          <lakeTrends />
        </div>
        <Typography variant="body1" gutterBottom className={classes.paragraph}>
          Texas lakes face a range of challenges in maintaining water quality and levels, including pollution, rising temperatures, climate change, increased drought intensity, and the competing demands of a growing population. The water in many Texas lakes contains high levels of pollutants, including fecal coliform bacteria, nitrogen, and phosphorus, which can harm aquatic life and make the water unsafe for recreational use. Agricultural runoff and discharge from wastewater treatment plants are some of the primary sources of this pollution.
        </Typography>
        <Typography variant="body1" gutterBottom className={classes.paragraph}>
          Rising temperatures in Texas are also contributing to declining lake levels and water quality. As temperatures increase, the rate of evaporation also rises, causing lakes to shrink in size. In addition, higher temperatures can exacerbate existing pollution problems by promoting the growth of harmful algae blooms.
        </Typography>
        <Typography variant="body1" gutterBottom className={classes.paragraph}>
          Population growth in Texas has led to increased demand for water resources, including from lakes. This increased demand has resulted in conflicts between different user groups, such as farmers, cities, and industries, all vying for limited water resources. Contracts and lobbying efforts from these groups can influence how water is allocated and used, sometimes at the expense of lake health and sustainability. This is seen readily along the Colorado River Basin which upholds many contracts with rice farms along the coast which relies on vast, consistent volumes of upstream water.
        </Typography>
      </Paper>
    </div>
  );
}

export default LakeTrends;
