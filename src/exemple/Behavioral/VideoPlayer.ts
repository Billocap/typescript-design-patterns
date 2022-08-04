class VideoState {
    protected player: Player;

    constructor(player: Player) {
        this.player = player;
    }

    clickLock() {}
    clickPLay() {}
    clickNext() {}
    clickPrevious() {}
}

class PlayingState extends VideoState {
    clickLock() {
        this.player.changeState(new LockedState(this.player));
    }

    clickPLay() {
        this.player.stopPlayback();
        this.player.changeState(new CompleteState(this.player));
    }

    clickNext() {
        this.player.nextSong();
    }

    clickPrevious() {
        this.player.previousSong();
    }
}

class LockedState extends VideoState {
    clickLock() {
        if (this.player.playing) {
            this.player.changeState(new PlayingState(this.player));
        } else {
            this.player.changeState(new CompleteState(this.player));
        }
    }
}

class CompleteState extends VideoState {
    clickLock() {
        this.player.changeState(new LockedState(this.player));
    }

    clickPLay() {
        this.player.startPlayback();
        this.player.changeState(new PlayingState(this.player));
    }

    clickNext() {
        this.player.nextSong();
    }

    clickPrevious() {
        this.player.previousSong();
    }
}

class Player {
    private state: VideoState;

    public UI: string;
    public volume: number;
    public playlist: any;
    public currentSong: any;
    public playing: boolean = false;

    constructor() {
        this.state = new CompleteState(this);

        this.UI = "UI";
    }

    changeState(state: VideoState) {
        this.state = state;
    }

    clickLock() {
        this.state.clickLock();
    }

    clickPlay() {
        this.state.clickPLay();

        this.playing = this.playing ? false : true;
    }

    clickNext() {
        this.state.clickNext();
    }

    clickPrevious() {
        this.state.clickPrevious();
    }

    startPlayback() {}
    stopPlayback() {}

    nextSong() {}
    previousSong() {}

    fastFoward() {}
    rewind() {}
}