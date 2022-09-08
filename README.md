# Zotero DOM Inspector
Add [dom-inspector](https://github.com/luoye-fe/dom-inspector) to Zotero.

## Brief
Add inspector to all html frames by one click.
![inspector](./inspector.png)
## Usage
- main menu
    - tools
        - developer
            - Show DOM Inspector

![menu](./menu.png)

## Essential
```js
for (let i = 0; window.frames[i]; ++i)
    inject(window.frames[i].document)
```