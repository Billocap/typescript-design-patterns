// Commands;
abstract class EditCommand { //Base Command;
    protected app: Application; // Receiver;
    protected editor: Editor; // Receiver;
    protected backup: Editor;

    constructor(app: Application, editor: Editor) {
        this.app = app;
        this.editor = editor;
    }

    saveBackup() {
        this.backup = this.editor;
    }

    undo() {
        this.editor = this.backup;
    }

    abstract execute(): void;
}

class CopyCommand extends EditCommand {
    execute() {
        this.app.clipboard = this.editor.getSelection();
    }
}

class CutCommand extends EditCommand {
    execute() {
        this.saveBackup();

        this.app.clipboard = this.editor.getSelection();

        this.editor.deleteSelection();
    }
}

class PasteCommand extends EditCommand {
    execute() {
        this.saveBackup();

        this.editor.replaceSelection(this.app.clipboard);
    }
}

class UndoCommand extends EditCommand {
    execute() {
        this.app.undo();
    }
}
//--------;


class CommandHistory {
    private history: EditCommand[];

    push(command: EditCommand) {
        this.history.push(command);
    }

    pop(): EditCommand {
        return this.history.pop();
    }
}

// Receivers;
class Editor {
    public text: string;

    getSelection(): string {
        return this.text;
    }

    deleteSelection() {
        this.text = "";
    }

    replaceSelection(text: string) {
        this.text = text;
    }
}

class Application {
    public editors: Editor[];
    public activeEditor: Editor;
    public clipboard: string;
    public history: CommandHistory;

    private shortcuts: ShortCut[];

    createUI() {
        this.shortcuts.push(new ShortCut());
    }

    executeCommand(command: EditCommand) {
        this.history.push(command);
    }

    undo() {
        const command = this.history.pop();

        command.undo();
    }
}
//-----;

// Invokers / Senders;
class Button {
    private command: EditCommand;

    setCommand(command: EditCommand) {
        this.command = command;
    }

    click() {
        this.command.execute();
    }
}

class ShortCut {
    onKeyPress(fn: () => void) {
        fn();
    }
}