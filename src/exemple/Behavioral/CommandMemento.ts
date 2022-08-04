class TextEditor {
    private text: string;
    private cursorx: number;
    private cursory: number;
    private selectionWidth: number;

    setText(text: string) {
        this.text = text;
    }

    setCursor(x: number, y: number) {
        this.cursorx = x;
        this.cursory = y;
    }

    setSelectionWidth(width: number) {
        this.selectionWidth = width;
    }

    createSnapshot(): Snapshot {
        return new Snapshot(this, this.text, this.cursorx, this.cursory, this.selectionWidth);
    }
}

class Snapshot {
    private editor: TextEditor;
    private text: string;
    private cursorx: number;
    private cursory: number;
    private selectionWidth: number;

    constructor(editor: TextEditor, text: string, cursorx: number, cursory: number, width: number) {
        this.editor = editor;
        this.text = text;
        this.cursorx = cursorx;
        this.cursory = cursory;
        this.selectionWidth = width;
    }

    restore() {
        this.editor.setText(this.text);
        this.editor.setCursor(this.cursorx, this.cursory);
        this.editor.setSelectionWidth(this.selectionWidth);
    }
}

class CommandMemento {
    private backup: Snapshot;
    private editor: TextEditor;

    makeBackup() {
        this.backup = this.editor.createSnapshot();
    }

    undo() {
        if (this.backup != null) {
            this.backup.restore();
        }
    }
}