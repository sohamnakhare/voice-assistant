import React from 'react';
import { ReactMic } from 'react-mic';

const blobToFile = (theBlob, fileName) => {
    //A Blob() is almost a File() - it's just missing the two properties below which we will add
    theBlob.lastModifiedDate = new Date();
    theBlob.name = fileName;
    return theBlob;
}

export class VoiceRecorder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            record: false
        }

        this.startRecording = this.startRecording.bind(this);
        this.stopRecording = this.stopRecording.bind(this);
        this.blobToFile = this.blobToFile.bind(this);
    }

    startRecording() {
        this.setState({
            record: true
        });
    }

    stopRecording() {
        this.setState({
            record: false
        });
    }

    onStop(recordedBlob) {
        console.log('recordedBlob is: ', recordedBlob);
        const file = blobToFile(recordedBlob, 'filename.webm');
        var fd = new FormData();
        fd.append('upl', recordedBlob.blob, 'filename.webm');

        fetch('http://localhost:3300/api/kb8',
            {
                method: 'POST',
                body: fd
            });
    }

    blobToFile(theBlob, fileName) {
        //A Blob() is almost a File() - it's just missing the two properties below which we will add
        theBlob.lastModifiedDate = new Date();
        theBlob.name = fileName;
        return theBlob;
    }


    render() {
        return (
            <div>
                <ReactMic
                    record={this.state.record}
                    className="sound-wave"
                    onStop={this.onStop}
                    strokeColor="#000000"
                    backgroundColor="#FF4081" />
                <button onClick={this.startRecording} type="button">Start</button>
                <button onClick={this.stopRecording} type="button">Stop</button>
            </div>
        );
    }
}

export default VoiceRecorder;