interface Handler {
    setNext(handler: Handler): void;
    handle(request: string): void;
}

class BaseHandler implements Handler {
    protected next: Handler;

    setNext(handler: Handler) {
        this.next = handler;
    }

    handle(request: string) {
        if (this.next) {
            this.next.handle(request);
        } else {
            console.log(request);
        }
    }
}

class ConcreteHandler extends BaseHandler {
    handle(request: string) {
        if (this.next) {            
            if (!request.startsWith("@")) {
                this.next.handle(request);
            } else {
                console.log("Invalid Request");
            }
        } else {
            console.log(request);
        }
    }
}

class ChainClient {
    private h1: Handler;
    private h2: Handler;
    private h3: Handler;

    constructor() {
        this.h1 = new BaseHandler();
        this.h2 = new ConcreteHandler();
        this.h3 = new BaseHandler();

        this.h1.setNext(this.h2);
        this.h2.setNext(this.h3);
    }

    handle(request: string) {
        this.h1.handle(request);
    }
}

export default ChainClient;