// Enable chromereload by uncommenting this line:
// import 'chromereload/devonly'

// これがないと更新するまでcontentscriptが動かない
chrome.webNavigation.onHistoryStateUpdated.addListener(() => {
    chrome.tabs.executeScript(null, { file: 'scripts/contentscript.js' });
});
