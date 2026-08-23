chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.get(["enabled"], (res) => {
    if (res.enabled === undefined) {
      chrome.storage.local.set({ enabled: true });
    }
  });
});

chrome.runtime.onStartup.addListener(() => {
    chrome.storage.local.get(["enabled"], (res) => {
        chrome.action.setIcon({
            path: res.enabled === false ? "turnOFF.png" : "turnON.png"
        });

    });
});
