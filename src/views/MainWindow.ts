import UI = require("@nodegui/nodegui");
import fs = require("fs");
import path = require("path");

export class MainWindow extends UI.QMainWindow {
    constructor() {
        super();

        this.initializeComponents();
    }

    /**
     * This method initializes all the UI components required to be loaded initially.
     * This can be overriden by the child class of this class
     */
    protected initializeComponents() {
        this.setWindowTitle("NodeGUI Boilerplate");
        this.setMinimumSize(400, 400);
        this.setStyleSheet(fs.readFileSync(path.resolve(__dirname, "../assets/styles/style.css"), "utf8"));
        this.setWindowIcon(new UI.QIcon(path.resolve(__dirname, "../assets/images/logo.png")));

        const centralWidget = new UI.QWidget();
        centralWidget.setInlineStyle(`
            height: '100%';
            align-items: 'center';
            justify-content: 'center';
            flex-direction: column;
        `);
        centralWidget.setLayout(new UI.FlexLayout());
        this.setCentralWidget(centralWidget);

        const lblHello = new UI.QLabel();
        lblHello.setText("Hello");
        lblHello.setInlineStyle(`
            font-size: 32px;
        `);

        const lblWorld = new UI.QLabel();
        lblWorld.setText("World");

        centralWidget.layout!.addWidget(lblHello);
        centralWidget.layout!.addWidget(lblWorld);
    }
}