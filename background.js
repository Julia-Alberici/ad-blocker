chrome.webNavigation.onCommitted.addListener(function (details) {
    if (details.frameId == 0) {
        chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
            let url = tabs[0].url;
            let domain = getDomain(url)

            try {
                if (domain.length < 1 || domain === null || domain === undefined) {
                    return;
                } else if (domain == "linkedin.com") {
                    runLinkedinScript(details.tabId);
                    return;
                }
            } catch (e) {
                throw e;
            }
        })
    }
})

function runLinkedinScript(tabId) {
    chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ['linkedin.js']
    });
}

function getDomain(url) {
    let parsedUrl = url
        .replace("https://", "")
        .replace("http://", "")
        .replace("www.", "");

    let domain = parsedUrl
        .slice(0, parsedUrl.indexOf("/") == -1 ? parsedUrl.length : parsedUrl.indexOf("/"))
        .slice(0, parsedUrl.indexOf("?") == -1 ? parsedUrl.length : parsedUrl.indexOf("?"));

    return domain;
}
