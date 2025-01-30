# Project name: wc-pane

### HOW TO USE

<u>Consider the following project's hierarchy, the hierarchy as follows</u>:

. <br>
|- ./src/ : _where index.js is the entry file of "wc-pane" itself_ <br>
|-- /web-components/wc-pane/ – _where index.js is the top level element (i.e. entry) of wc-pane (i.e. GUI) itself_ <br>

---

### Features

#### Draggable GUI ? – Not a problem !

1.1 set {`draggable: true`} during **wc-pane** (GUI) initialization; <br> 
1.2 press and keep `MouseLeft+Alt` (`MouseLeft+Option` on MacOS) whilst dragging your instance of GUI over the viewport to desired position.

#### Dockable GUI ? - Picture-in-Picture (PiP) API comes to rescue [EXPERIMENTAL FEATURE]

> Mouse with your primary pointer (e.g. mouse) over GUI's element **wc-pane** instance on viewport of your browser and double click whilst the `ctrlKey` (`command` on MacOS) is being pressed with onhold, it will transfer the **wc-pane** instance to dedicated PiP controlled window;to do opposite, press on native exit button, i.e. "X" ("red button" on MacOS) found in the "titlebar" of PiP instantiated window;

---

> Found a bug? Please raise an issue.

---

Made with ♥ by [projektorius96](https://github.com/projektorius96)
