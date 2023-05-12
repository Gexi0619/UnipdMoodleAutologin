chrome.runtime.onInstalled.addListener(function(details) {
  if (details.reason == "install" || details.reason == "update") {
    chrome.storage.local.get(["username", "password", "usertype"], function(data) {
      if (!data.username || !data.password || !data.usertype) {
        setTimeout(function() {
          chrome.windows.create({
            url: "popup.html",
            type: "popup",
            width: 500,
            height: 500
          });
        }, 1000); // 1 秒延迟
      }
    });
  }
});
