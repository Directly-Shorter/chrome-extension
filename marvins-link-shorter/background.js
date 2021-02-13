chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
    function (tabs) {
        var tab = tabs[0].url
        if (tab !== "chrome://newtab/"
            && tab !== "chrome://extensions/"
            && tab !== "undefined"
            && tab !== ""
            && tab !== null
            && tab !== "chrome://extensions/?id=dlcndoeajhdcfloijgjgblhbdbpcladh"
            && tab !== "about:blank"
            && tab !== "https://chrome.google.com/webstore/detail/marvins-link-shorter/apibgginpfhgioddcidkijcckipplmoo/related?hl=de&authuser=0"
            && tab !== "https://chrome.google.com/webstore/detail/marvins-link-shorter/apibgginpfhgioddcidkijcckipplmoo/related?hl=de") {

            
            window.open("https://directly.click/create?url=" + tab, "_blank")

        }
    }
);
