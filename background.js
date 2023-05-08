chrome.runtime.onInstalled.addListener(function(details) {
  if (details.reason == "install" || details.reason == "update") {
    chrome.storage.local.get(["username", "password", "usertype"], function(data) {
      if (!data.username || !data.password || !data.usertype) {
        chrome.windows.create({
          url: "popup.html",
          type: "popup",
          width: 500,
          height: 500
        });
      }
    });
  }
});
