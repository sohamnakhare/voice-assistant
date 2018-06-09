import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { MessageList } from 'react-chat-elements'
import 'react-chat-elements/dist/main.css';
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

        <Grid item xs={12} sm={12}>
          {/* <Paper className={classes.paper}> */}

                <MessageList
                    className='message-list'
                    lockable={true}
                    toBottomHeight={'100%'}
                    dataSource={[
                        {
                            position: 'right',
                            type: 'text',
                            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                            date: new Date(),
                        },
                        {
                            position: 'right',
                            type: 'text',
                            text: '34546',
                            date: new Date(),
                        }
                        
                ]}
                 />
                 <MessageList
                    className='message-list'
                    lockable={true}
                    toBottomHeight={'100%'}
                    dataSource={[
                        {
                            position: 'left',
                            type: 'text',
                            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                            date: new Date(),
                        }
                        
                ]}
                 />
          {/* </Paper> */}
        </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);
