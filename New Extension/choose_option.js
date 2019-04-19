console.log("Adding event listener");
document.addEventListener("click", function(e) {
  console.log("Executing event listener");

  if (e.target.classList.contains("Button1")) {
    console.log("attempting to disable links");
    var disables = browser.tabs.executeScript({file: "Disable.js"});
    console.log('links should be disabled');

    var css = "body { border: 5px solid red; }";
    var insertingCSS = browser.tabs.insertCSS({code: css});
    insertingCSS.then(null, onError);

  }

  if (e.target.classList.contains("Button2")) {
    var enables = browser.tabs.executeScript({file: "Enable.js"});
    console.log('links should be enabled');

  insertingCSS.classList.remove();
  }

});
