import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding:'4px'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
  },
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={8}>
        <Grid item xs={3} sm={3}>
          <Paper className={classes.paper}>
            <div ><i className="fa fa-2x fa-envelope "></i></div>
          </Paper>
        </Grid>
        <Grid item xs={3} sm={3}>
          <Paper className={classes.paper}>
          <div ><i className="fa fa-2x far fa-comments "></i></div>
          </Paper>
        </Grid>
        <Grid item xs={3} sm={3}>
          <Paper className={classes.paper}>
          <div ><i className="fa fa-2x fas fa-microphone"></i></div>
          </Paper>
        </Grid>
        <Grid item xs={3} sm={3}>
          <Paper className={classes.paper}>
          <div ><i className="fa fa-2x fas fa-phone"></i></div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);
