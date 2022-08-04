interface Device {
    enabled: boolean;
    volume: number;
    channel: number;
    enable(): void;
    disable(): void;
}

class TV implements Device {
    private _channel: number = 0;
    private on: boolean = false;
    private _volume: number = 0;

    get enabled(): boolean {
        return this.on;
    }

    enable(): void {
        this.on = true;
    }

    disable(): void {
        this.on = false;
    }

    get volume(): number {
        return this._volume;
    }

    set volume(percent: number) {
        this._volume = percent;
    }
    
    get channel(): number {
        return this._channel;
    }

    set channel(channel: number) {
        this._channel = channel;
    }
}

class Radio implements Device {
    private _channel: number = 0;
    private on: boolean = false;
    private _volume: number = 0;

    get enabled(): boolean {
        return this.on;
    }

    enable(): void {
        this.on = true;
    }

    disable(): void {
        this.on = false;
    }

    get volume(): number {
        return this._volume;
    }

    set volume(percent: number) {
        this._volume = percent;
    }
    
    get channel(): number {
        return this._channel;
    }

    set channel(channel: number) {
        this._channel = channel;
    }
}

class Remote {
    protected device: Device;

    constructor(device: Device) {
        this.device = device;
    }

    change(device: Device) {
        this.device = device;
    }

    toggle() {
        if (this.device.enabled) {
            this.device.disable();
        } else {
            this.device.enable();
        }
    }

    volumeDown() {
        this.device.volume -= 1;
    }

    volumeUp() {
        this.device.volume += 1;
    }

    channelDown() {
        this.device.channel -= 1;
    }

    channelUp() {
        this.device.channel += 1;
    }
}

class AdvancedRemote extends Remote {
    mute() {
        this.device.volume = 0;
    }
}

const tv = new TV();
const radio = new Radio();

const remote = new Remote(tv);

remote.channelDown();

remote.change(radio);

remote.volumeDown();