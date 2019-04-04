document.addEventListener("click", function(e) {
  if (!e.target.classList.contains("Button1")) {
    return;
  }

var disable = browser.tabs.executeScript({file: "Disable.js"});

});




document.addEventListener("click", function(e) {
  if (!e.target.classList.contains("Button2")) {
    return;
  }

  var enable = browser.tabs.executeScript({file: "Enable.js"});


});
