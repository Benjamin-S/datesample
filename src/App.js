import React, { useState } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { AppBar, Toolbar, Typography, makeStyles, Grid, Paper } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import DateRangeIcon from "@material-ui/icons/DateRange";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://symonslabs.com/">
        Symons Labs
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  App: {
    padding: theme.spacing(2),
    flexGrow: 1,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  datePicker: {
    padding: theme.spacing(2)
  }
}));


function App() {

  const [selectedStartDate, handleStartDateChange] = useState(new Date());
  const [selectedEndDate, handleEndDateChange] = useState(new Date());

  const classes = useStyles();

  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <DateRangeIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Date Sample
          </Typography>
          <nav>
            <Link variant="button" color="inherit" href="#" className={classes.link}>
              Instructions
            </Link>
            <Link variant="button" color="inherit" href="#" className={classes.link}>
              About
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.App}>
          <Grid container justify="center" alignItems="center">
            <MuiPickersUtilsProvider utils={MomentUtils}>
              {/* <Grid item lg> */}
              <Paper align="center">
                <KeyboardDatePicker className={classes.datePicker} clearable
                  value={selectedStartDate}
                  onChange={date => handleStartDateChange(date)}
                  format="DD/MM/yyyy" />
                <KeyboardDatePicker className={classes.datePicker} clearable
                  value={selectedEndDate}
                  onChange={date => handleEndDateChange(date)}
                  format="DD/MM/yyyy" />

              </Paper>
              {/* </Grid> */}
            </MuiPickersUtilsProvider>
          </Grid>

          {/* <Grid container spacing={1}>
            <Grid item lg>
              <Paper className={classes.paper}>Date Range 1
              </Paper>
            </Grid>
            <Grid item lg>
              <Paper className={classes.paper}>xs=12 sm=6</Paper>
            </Grid>
            <Grid item lg>
              <Paper className={classes.paper}>xs=12 sm=6</Paper>
            </Grid>
            <Grid item lg>
              <Paper className={classes.paper}>xs=6 sm=3</Paper>
            </Grid>
            <Grid item lg>
              <Paper className={classes.paper}>xs=6 sm=3</Paper>
            </Grid>
            <Grid item lg>
              <Paper className={classes.paper}>xs=6 sm=3</Paper>
            </Grid>
            <Grid item lg>
              <Paper className={classes.paper}>xs=6 sm=3</Paper>
            </Grid>
          </Grid> */}
        </div>

      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Date Sample
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          -
        </Typography>
        <Copyright />
      </footer>
    </>
  );
}

export default App;
