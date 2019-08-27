console.log('Attempting to disable link');

var links = document.getElementsByTagName("a");

for (var i = 0; i < links.length; i++) {
  console.log(links[i].href);
  links[i].setAttribute("rel", href);
  links[i].href = "javascript:;"

}
console.log('Done disabling links');
