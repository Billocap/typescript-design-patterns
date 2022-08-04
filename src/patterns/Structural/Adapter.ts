//Will Adapt;
class Service {
    serviceMethod(data: string): string {
        return data;
    }
}

//Target
interface Target {
    method(data: string): string;
}

class Adapter implements Target {
    private adaptee: Service;

    constructor(service: Service) {
        this.adaptee = service;
    }

    method(data: string): string {
        const converted = data;

        return this.adaptee.serviceMethod(converted);
    }
}

class Client {
    private target: Target;

    constructor(target: Target) {
        this.target = target;
    }

    action(data: string): string {
        return this.target.method(data);
    }
}

const service = new Service();
const client = new Client(new Adapter(service));