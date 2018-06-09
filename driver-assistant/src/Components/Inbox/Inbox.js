import React from 'react';
import Chatbox from './Chatbox.js'
import SalesRep from './SalesRep.js'
import UniversalInbox from './UniversalInbox'


class Inbox extends React.Component {

    constructor() {
        super();

        this.state = {};
    }

    componentDidMount() {
        let conversations = [];
        try {
            conversations = JSON.parse(localStorage.getItem('conversations'));
        }
        catch(err) {
            conversations = [];
        }
        this.setState({conversations});
    }

    render() {
        return (
            <div>
                <UniversalInbox/>
                <SalesRep/>
                <Chatbox conversations={this.state.conversations || []}/>
            </div>
        )
    }
}

export default Inbox;