// https://stackoverflow.com/questions/9515704/building-a-chrome-extension-inject-code-in-a-page-using-a-content-script
var toInject = document.createElement('script');
toInject.src = chrome.extension.getURL("youtube_frame.js");

toInject.onLoad = function() {
    this.parentNode.removeChild(this);
};

(document.head || document.documentElement).appendChild(toInject);
