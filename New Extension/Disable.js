console.log('Attempting to disable link');

var links = document.getElementsByTagName("a");

var filterValue = gBrowser.contentDocument.getElementById("form1").value
console.log(filterValue);

for (var i = 0; i < links.length; i++) {
<<<<<<< HEAD
  var href = links[i].href;
=======
>>>>>>> 1ac69d8f46f86f7f9c6e7151296b2dc67b1291b9
  console.log(links[i].href);
  links[i].setAttribute("rel", href);
  links[i].href = "javascript:;"

}
console.log('Done disabling links');
