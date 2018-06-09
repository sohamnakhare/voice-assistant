class ConversationTracker {

    storeMessage(message) {
        var conversations = [];
        try {
            conversations = JSON.parse(localStorage.getItem('conversations'));
            conversations = conversations ? conversations : [];
            conversations.push(message);
        } catch(err) {
            conversations = [message];
        }
        localStorage.setItem('conversations', JSON.stringify(conversations));
    }
}

export default ConversationTracker;


