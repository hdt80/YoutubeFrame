//https://krasimirtsonev.com/blog/article/Chrome-extension-debugging-dev-tools-tab-or-how-to-make-console-log
var bglog = function(obj) {
    if (chrome && chrome.runtime) {
        chrome.runtime.sendMessage({type: "bglog", obj: obj});
    }
}

// https://stackoverflow.com/questions/9515704/building-a-chrome-extension-inject-code-in-a-page-using-a-content-script
bglog("Start");
var toInject = document.createElement('script');
toInject.src = chrome.extension.getURL("youtube_frame.js");

toInject.onLoad = function() {
    this.parentNode.removeChild(this);
};

(document.head || document.documentElement).appendChild(toInject);

bglog("Done");
