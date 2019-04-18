var css = "body { border: 5px solid red; }";

browser.browserAction.onClicked.addListener(() => {

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var insertingCSS = browser.tabs.insertCSS({code: css});
  insertingCSS.then(null, onError);
});
