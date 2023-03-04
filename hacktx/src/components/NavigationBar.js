import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import texas from './TEXAS.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,  
  },
  logo: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
  tabs: {
    width: '100%',
    justifyContent: 'space-evenly',
  },
  tab: {
    minWidth: 'unset',
    width: `${100 / 4}%`,
  },
  WaterIcon: {
    fontSize: 'inherit',
    '& > *:first-child': {
      fontSize: 'inherit',
    },
  },
  texasIcon: {
    height: '50px',
    width: '50px',
    marginLeft: '-10px',
  },
}));

function NavigationBar(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (props.onTabChange) {
      switch (newValue) {
        case 0:
          props.onTabChange('Lake Trends');
          break;
        case 1:
          props.onTabChange('Austin Lakes');
          break;
        case 2:
          props.onTabChange('Protect Our Lakes');
          break;
        case 3:
          props.onTabChange('About Us');
          break;
        default:
          break;
      }
    }
  };

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <img src={texas} alt="Texas" className={classes.texasIcon} />
        <Typography variant="h6" className={classes.title}>
          Texas Eco
        </Typography>
        <Tabs
          className={classes.tabs}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab className={classes.tab} label="Lake Trends" />
          <Tab className={classes.tab} label="Austin Lakes" />
          <Tab className={classes.tab} label="Protect Our Lakes" />
          <Tab className={classes.tab} label="About Us" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}

export default NavigationBar;
