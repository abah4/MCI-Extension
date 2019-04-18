
document.addEventListener("click", function(e) {
  if (!e.target.classList.contains("Button1")) {
    return;
  }

var disables = browser.tabs.executeScript({file: "Disable.js"});

});


document.addEventListener("click", function(e) {
  if (!e.target.classList.contains("Button2")) {
    return;
  }

  var enables = browser.tabs.executeScript({file: "Enable.js"});


});
