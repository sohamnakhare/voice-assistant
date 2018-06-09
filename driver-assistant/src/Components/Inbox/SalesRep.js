import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding:'16px'
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
        <Grid item xs={12} sm={12}>
        <div style={{ color:'#FFF'}}>
            <i className="fa far fa-circle "></i>  #1243-aaa-34 sales rep
            <div> Place A --> Place B</div>
        </div>
        
        </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);
