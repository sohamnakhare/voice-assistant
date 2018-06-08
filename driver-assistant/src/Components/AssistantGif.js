import React from 'react';
import GifPlayer from 'react-gif-player';

class AssistantGIF extends React.Component {

    render() {
        return (
            <GifPlayer
                gif="tenor.gif"
                pauseRef={this.props.setRef}
            />
        );
    }
}

export default AssistantGIF;