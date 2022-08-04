// Named this way to avoid collisions;
interface Command {
    execute(): void;
}

class Command1 implements Command {
    private receiver: Receiver;
    private params: string[];

    constructor(receiver: Receiver, params: string[]) {
        this.receiver = receiver;
        this.params = params;
    }

    execute() {
        const [a, b, c] = this.params;

        this.receiver.operation(a, b, c);
    }
}

class Command2 implements Command {
    execute() {}
}

// Or Sender
class Invoker {
    private command: Command;

    setCommand(command: Command) {
        this.command = command;
    }

    executeCommand() {
        this.command.execute();
    }
}

class Receiver {
    operation(a: string, b: string, c: string) {}
}

// Client Class Named This Way to Avoid Collisions
class Conquer {
    sendRequest(params: string[]) {
        const command = new Command1(new Receiver(), params);

        command.execute();
    }

    execute() {
        const command = new Command2();

        command.execute();
    }
}