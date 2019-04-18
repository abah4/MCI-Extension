console.log('Attempting to disable link');

var links = document.getElementsByTagName("a");

for (var i = 0; i < links.length; i++) {
        var href = links[i].getAttribute("rel");
        links[i].removeAttribute("rel");
        links[i].href = href
    }
});

var css = "body { border: 5px solid red; }";

browser.browserAction.onClicked.addListener(() => {

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var insertingCSS = browser.tabs.insertCSS({code: css});
  insertingCSS.then(null, onError);
});
console.log('Done disabling links');
