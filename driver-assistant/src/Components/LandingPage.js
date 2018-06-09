import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import $ from 'jquery';
import AssistantGif from "./AssistantGif.js";
import Dialog from './Dialog.js';

import ConversationTracker from '../ConversationTracker.js';
import SpeechHandler from '../SpeechHandler.js';
import StoryTeller from '../StoryTeller.js';

const speechHandler = new SpeechHandler();
const storyTeller = new StoryTeller();
const conversationTracker = new ConversationTracker(); 

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
});

class GuttersGrid extends React.Component {
    state = {
        spacing: '16',
    };

    handleChange = key => (event, value) => {
        this.setState({
            [key]: value,
        });
    };

    componentDidMount() {
        var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( {[keys[i]]: localStorage.getItem(keys[i])});
    }

    console.log(JSON.stringify(values));
        this.addCommands();
        this.buildStory();
        // storyTeller.startStory();
        speechHandler.addCommand("Let's begin", () => {
            storyTeller.startStory();
        });
    }

    addCommands() {
        const self = this;
        speechHandler.addCommand("instructions", () => {
            conversationTracker.storeMessage({sender: 'driver', message: 'instructions'});
            speechHandler.speak(localStorage.getItem('enable_tracking_instructions'), () => {
                $('.gif_player').trigger('click');
            }, () => {
                self.pauseGif();
            });
        });
        speechHandler.addCommand("enable tracking for me", () => {
            conversationTracker.storeMessage({sender: 'driver', message: 'enable tracking for me'});
            speechHandler.speak(localStorage.getItem('enable_tracking_done'), () => {
                $('.gif_player').trigger('click');
            }, () => {
                self.pauseGif();
            });
        });
    }

    buildStory() {
        const self = this;

        const episode1 = function (next) {
            self.setState({ open: true, currentEpisodeName: '2 hours before the pickup' }, () => {
                setTimeout(() => {
                    self.setState({ open: false, currentEpisodeName: '' }, () => {
                        const msg = localStorage.getItem('enable_tracking_reminder');
                        speechHandler.speak(msg, () => {
                            conversationTracker.storeMessage({sender: 'bot', message:msg});
                            $('.gif_player').trigger('click');
                        }, () => {
                            self.pauseGif();
                            speechHandler.addCommand("play episode 2", () => {
                                next();
                            })
                        });
                    });
                }, 3000);
            });
        }

        const episode2 = function (next) {
            speechHandler.addCommand("play episode 3", () => {
                next();
            });
            self.setState({ open: true, currentEpisodeName: 'Confirm load pickup' }, () => {
                setTimeout(() => {
                    self.setState({ open: false, currentEpisodeName: '' }, () => {
                        const msg = localStorage.getItem('confirm_load_pickup');
                        conversationTracker.storeMessage({sender: 'bot', message:msg});
                        speechHandler.speak(msg, () => {
                            $('.gif_player').trigger('click');
                            speechHandler.addCommand("yes", () => {
                                conversationTracker.storeMessage({sender: 'driver', message: "yes"});
                                speechHandler.speak('We have noted down your response. Thank you', () => {
                                    conversationTracker.storeMessage({sender: 'bot',
                                        message: "We have noted down your response. Thank you"});
                                    $('.gif_player').trigger('click');
                                }, () => {
                                    self.pauseGif();
                                });
                            });
                            speechHandler.addCommand("no", () => {
                                conversationTracker.storeMessage({sender: 'driver', message: "no"});
                                speechHandler.speak('We have noted down your response. Thank you', () => {
                                    conversationTracker.storeMessage({sender: 'bot',
                                        message: "We have noted down your response. Thank you"});
                                    $('.gif_player').trigger('click');
                                }, () => {
                                    self.pauseGif();
                                });
                            });
                        }, () => {
                            self.pauseGif();
                        });
                    });
                }, 3000);
            });
        }

        const episode3 = function (next) {
            self.setState({ open: true, currentEpisodeName: 'Confirm ETA' }, () => {
                setTimeout(() => {
                    self.setState({ open: false, currentEpisodeName: '' }, () => {
                        const msg = localStorage.getItem('confirm_eta');
                        speechHandler.speak(msg, () => {
                            conversationTracker.storeMessage({sender: 'bot', message:msg});
                            $('.gif_player').trigger('click');
                        }, () => {
                            self.pauseGif();
                            speechHandler.addCommand("play episode 4", () => {
                                next();
                            })
                        });
                    });
                }, 3000);
            });
        }

        const episode4 = function (next) {
            self.setState({ open: true, currentEpisodeName: 'Confirm Delivery' }, () => {
                setTimeout(() => {
                    self.setState({ open: false, currentEpisodeName: '' }, () => {
                        const msg = localStorage.getItem('confirm_delivery');
                        speechHandler.speak(msg, () => {
                            conversationTracker.storeMessage({sender: 'bot', message:msg});
                            $('.gif_player').trigger('click');
                        }, () => {
                            self.pauseGif();
                        });
                    });
                }, 3000);
            });
        }

        storyTeller.addEpisode(episode1);
        storyTeller.addEpisode(episode2);
        storyTeller.addEpisode(episode3);
        storyTeller.addEpisode(episode4);

    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Grid container className={classes.root} spacing={16}>
                    <Grid item xs={12}>
                        <div style={{ position: 'fixed', top: '22%', left: '-5%' }}>
                            <AssistantGif setRef={(pause) => this.pauseGif = pause} />
                        </div>
                    </Grid>
                </Grid>
                <Dialog open={this.state.open} title={this.state.currentEpisodeName} />
            </div>
        );
    }
}

GuttersGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GuttersGrid);