console.log('Attempting to disable link');

var links = document.getElementsByTagName("a");

var filterValue = gBrowser.contentDocument.getElementById("form1").value
console.log(filterValue);

for (var i = 0; i < links.length; i++) {
  var href = links[i].href;
  console.log(links[i].href);
  links[i].setAttribute("rel", href);
  links[i].href = "javascript:;"

}
console.log('Done disabling links');
