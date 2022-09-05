# Zotero DOM Inspector
Add [dom-inspector](https://github.com/luoye-fe/dom-inspector) to Zotero.

![inspector](./inspector.png)
## Usage
- main menu
    - tools
        - developer
            - Show DOM Inspector

![menu](./menu.png)

```js
const reader = Zotero.Reader.getByTabID(Zotero_Tabs.selectedID);
        
reader._iframeWindow.eval('inspector.disable()')  // pdf viewer
reader._window[3].eval('inspector.enable()')  // note editor
```
