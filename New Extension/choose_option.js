console.log("Adding event listener");
document.addEventListener("click", function(e) {
  console.log("Executing event listener");

  if (e.target.classList.contains("Button1")) {
    console.log("attempting to disable links");
    var disables = browser.tabs.executeScript({file: "Disable.js"});
    console.log('links should be disabled');
  }

  if (e.target.classList.contains("Button2")) {
    var enables = browser.tabs.executeScript({file: "Enable.js"});
    console.log('links should be enabled');
  }

});
