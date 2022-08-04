class ObserveEditor {
    public events: EventManager;
    private file: string;

    constructor() {
        this.events = new EventManager();
    }

    openFile(path: string) {
        this.file = path;

        this.events.notify("open", this.file);
    }

    saveFile(path: string) {
        this.file = path;

        this.events.notify("save", this.file);
    }
}

class EventManager {
    private listeners: Map<string, EventListeners>;

    subscribe(type: string, listener: EventListeners) {
        this.listeners.set(type, listener);
    }

    unsubscribe(type: string, listener: EventListeners) {
        if (this.listeners.get(type) == listener) {
            this.listeners.delete(type);
        }
    }

    notify(type: string, data: string) {
        this.listeners.forEach(listener => {
            listener.update("Done");
        });
    }
}

interface EventListeners {
    update(filename: string): void;
}

class LoggingListener implements EventListeners {
    private log: string;
    private message: string;

    constructor(filename: string, message: string) {
        this.log = filename;
        this.message = message;
    }

    update(filename: string) {
        this.log = filename;
    }
}

class EmailAlertsListener implements EventListeners {
    private email: string;
    private message: string;

    constructor(email: string, message: string) {
        this.email = email;
        this.message = message;
    }

    update(filename: string) {
        this.email = filename;
    }
}

class ObserveApp {
    config() {
        const editor = new ObserveEditor();

        const logger = new LoggingListener("file", "Hello World");
        editor.events.subscribe("open", logger);

        const email = new EmailAlertsListener("file", "Hello World");
        editor.events.subscribe("save", email);
    }
}