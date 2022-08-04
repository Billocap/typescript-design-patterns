interface Subscriber {
    update(context: string): void;
}

class ConcreteSubscriber implements Subscriber {
    update(context: string) {}
}

class Publisher {
    private subscribers: Subscriber[];
    private mainState: string;

    subscribe(subscriber: Subscriber) {
        this.subscribers.push(subscriber);
    }

    unsubscribe(subscriber: Subscriber) {
        this.subscribers.splice(this.subscribers.indexOf(subscriber), 1);
    }

    notifySubscribers() {
        this.subscribers.forEach(subscriber => {
            subscriber.update("Done");
        });
    }

    mainBusinessLogic() {
        this.mainState = "Done";

        this.notifySubscribers();
    }
}

class ObserverClient {
    private publisher: Publisher;

    constructor() {
        this.publisher = new Publisher();

        const sub1 = new ConcreteSubscriber();

        this.publisher.subscribe(sub1);

        this.publisher.mainBusinessLogic();
    }
}