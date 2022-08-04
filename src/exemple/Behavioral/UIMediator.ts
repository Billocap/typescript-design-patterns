interface UIMediator {
    notify(sender: UIComponent, event: string): void;
}

class UIComponent {
    protected dialog: UIMediator;

    constructor(dialog: UIMediator) {
        this.dialog = dialog;
    }

    click() {
        this.dialog.notify(this, "click");
    }

    keypress() {
        this.dialog.notify(this, "keypress");
    }
}

class UIButton extends UIComponent {}

class UITextBox extends UIComponent {}

class UICheckbox extends UIComponent {
    check() {}
}

class AuthenticationDialog implements UIMediator {
    private title: string;
    
    private loginOrRegister: boolean;
    private loginUsername: UITextBox;
    private loginPassword: UITextBox;

    private regUsername: UITextBox;
    private regPassword: UITextBox;
    private regEmail: UITextBox;

    private ok: UIButton;
    private cancel: UIButton;

    private rememberMe: UICheckbox;

    constructor() {
        this.title = "Dialog";

        this.loginOrRegister = false;
        this.loginUsername = new UITextBox(this);
        this.loginPassword = new UITextBox(this);

        this.regUsername = new UITextBox(this);
        this.regPassword = new UITextBox(this);
        this.regEmail = new UITextBox(this);

        this.ok = new UIButton(this);
        this.cancel = new UIButton(this);

        this.rememberMe = new UICheckbox(this);
    }

    notify(sender: UIComponent, event: string) {
        if (event == "check") {
            if (this.loginOrRegister) {
                this.title = "Log In";
            } else {
                this.title = "Register";
            }
        }
    }
}