Zotero.Inspector = new function () {
    function inject(doc) {
        const importScript = doc.createElement("script");
        importScript.setAttribute("src",
            "chrome://zoteroinspector/content/dom-inspector.js"
        );
        doc.head.append(importScript);

        const initScript = doc.createElement("script");
        initScript.innerHTML = `
            var inspector = new DomInspector({
                root: 'body',
                maxZIndex: 999
            });
            inspector.enable();
        `;
        doc.head.append(initScript);
    }

    this.injectInspector = function () {
        const reader = Zotero.Reader.getByTabID(Zotero_Tabs.selectedID);
        if (!reader)
            return;
        for (let i = 0; window.frames[i]; ++i)
            inject(window.frames[i].document)
        // inject(reader._iframeWindow.document);
        return reader;
    }

    /**
     * Initiate addon
     */
    this.init = function () {
        const show = `Zotero.Inspector.injectInspector();`;
        const disable = `Zotero.Reader.getByTabID(Zotero_Tabs.selectedID)._iframeWindow.eval('inspector.disable()')`;

        const menuShow = document.createElement('menuitem');
        menuShow.setAttribute('label', 'Show DOM Inspector');
        menuShow.setAttribute('oncommand', show);
        document.getElementById('developer-menu').menupopup.append(menuShow);

        // const menuDisable = document.createElement('menuitem');
        // menuShow.setAttribute('label', 'Disable DOM Inspector');
        // menuShow.setAttribute('oncommand', disable);
        // document.getElementById('developer-menu').menupopup.append(menuDisable);
    }
}

window.addEventListener(
    "load",
    function () {
        Zotero.Inspector.init();
    },
    false
);
