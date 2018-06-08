
class StoryTeller {
    constructor() {
        this.episodes = [];
    }

    addEpisode(episode) {
        this.episodes.push(episode);
    }

    startStory() {
        this.currentEpisode = 0;
        const episode = this.episodes[this.currentEpisode];
        episode(this.done.bind(this));
    }

    done() {
        this.currentEpisode++;
        if(this.currentEpisode < this.episodes.length) {
            const episode = this.episodes[this.currentEpisode];
            episode(this.done.bind(this));
        }
    }
}

export default StoryTeller;