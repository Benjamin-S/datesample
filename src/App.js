import React, { useState } from 'react';
import './App.css';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns";
import Typography from "@material-ui/core/Typography";
import { AppBar, Toolbar, Link, Grid, Paper, makeStyles } from '@material-ui/core';
import DateRangeIcon from "@material-ui/icons/DateRange";

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
  icon: {
    marginRight: theme.spacing(2),
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  App: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}))

function App() {

  const [selectedStartDate, handleStartDateChange] = useState(new Date());
  const [selectedEndDate, handleEndDateChange] = useState(new Date());

  const classes = useStyles();

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
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
              {/* <Grid item lg> */}
              <Paper align="center">
                <KeyboardDatePicker className={classes.datePicker} clearable
                  value={selectedStartDate}
                  onChange={date => handleStartDateChange(date)}
                  format="dd/MM/yyyy" />
                <KeyboardDatePicker className={classes.datePicker} clearable
                  value={selectedEndDate}
                  onChange={date => handleEndDateChange(date)}
                  format="dd/MM/yyyy" />

              </Paper>
              {/* </Grid> */}
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
      </MuiPickersUtilsProvider>
    </>
  );
}

export default App;
