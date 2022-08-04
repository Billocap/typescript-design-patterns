interface ServiceInterface {
    operation(): void;
}

//The Proxy class named this way because
// There's already a Proxy class;
class Prox implements ServiceInterface {
    private realService: ServiceToProxy;

    constructor(service: ServiceToProxy) {
        this.realService = service;
    }

    operation() {
        this.realService.operation();
    }
}

// Also named this way to avoid name collisions;
class ServiceToProxy implements ServiceInterface {
    operation() {}
}