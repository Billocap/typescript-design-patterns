interface ComponentWithContextualHelp {
    showHelp(): void;
}

class Component implements ComponentWithContextualHelp {
    protected container: Container;
    public tooltipText: string;

    showHelp() {
        if (!this.tooltipText) {
            console.log(this.tooltipText);
        } else {
            this.container.showHelp();
        }
    }
}

class Button extends Component {}

class Container extends Component {
    protected children: Component[];

    add(child: Component) {
        this.children.push(child);
    }
}

class Panel extends Container {
    public modalHelpText: string;

    showHelp() {
        if (!this.modalHelpText) {
            console.log(this.modalHelpText);
        } else {
            super.showHelp();
        }
    }
}

class Dialog extends Container {
    public wikiPageUrl: string;

    showHelp() {
        if (!this.wikiPageUrl) {
            console.log(this.wikiPageUrl);
        } else {
            super.showHelp();
        }
    }
}

class Application {
    static createUI() {
        const dialog = new Dialog();
        dialog.wikiPageUrl = "http://google.com.br";

        const panel = new Panel();
        panel.modalHelpText = "This panel does...";

        const ok = new Button();
        ok.tooltipText = "This is an OK button that...";

        const cancel = new Button();
        cancel.tooltipText = "This is a Cancel button that...";

        panel.add(ok);
        panel.add(cancel);

        dialog.add(panel);
    }
}

export default Application;