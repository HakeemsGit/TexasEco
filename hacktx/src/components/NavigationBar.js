import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Tabs, Tab } from '@material-ui/core';
import WaterIcon from '@material-ui/icons/Opacity';
import { makeStyles } from '@material-ui/core/styles';

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
}));

function NavigationBar(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (props.onTabChange) {
      switch (newValue) {
        case 0:
          props.onTabChange('Tab1');
          break;
        case 1:
          props.onTabChange('Tab2');
          break;
        case 2:
          props.onTabChange('Tab3');
          break;
        case 3:
          props.onTabChange('Tab4');
          break;
        default:
          break;
      }
    }
  };

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <IconButton edge="start" className={classes.logo} color="inherit" aria-label="menu">
          <WaterIcon className={classes.WaterIcon} />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Aqua Stats
        </Typography>
        <Tabs
          className={classes.tabs}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab className={classes.tab} label="Tab1" />
          <Tab className={classes.tab} label="Tab2" />
          <Tab className={classes.tab} label="Tab3" />
          <Tab className={classes.tab} label="Tab4" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}

export default NavigationBar;