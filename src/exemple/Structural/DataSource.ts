interface DataSource {
    writeData(data: string): void;
    readData(): string;
}

class FileDataSource implements DataSource {
    private filename: string;

    constructor(filename: string) {
        this.filename = filename;
    }

    writeData(data: string) {
        this.filename = data;
    }

    readData() {
        return this.filename;
    }
}

class DataSourceDecorator implements DataSource {
    protected wrappee: DataSource;

    constructor(source: DataSource) {
        this.wrappee = source;
    }

    writeData(data: string) {
        this.wrappee.writeData(data);
    }

    readData() {
        return this.wrappee.readData();
    }
}

class EncryptionDecorator extends DataSourceDecorator {
    writeData(data: string) {
        this.wrappee.writeData(`Encrypted: ${data}`);
    }
}

class CompressionDecorator extends DataSourceDecorator {
    writeData(data: string) {
        this.wrappee.writeData(`Compressed: ${data}`);
    }
}