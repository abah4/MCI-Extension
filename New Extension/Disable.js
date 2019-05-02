console.log('Attempting to disable link');

var links = document.getElementsByTagName("a");

for (var i = 0; i < links.length; i++) {
  var href = links[i].href;
  console.log(href);
  if (href.includes('csoonline')) {
    var elements = [];
    var el = links[i];
    while(el) {
      elements.unshift(el);
      el = el.parentNode;
    }
    console.log(elements);
  }
  links[i].setAttribute("rel", href);
  links[i].href = "javascript:;"
}
console.log('Done disabling links');
//console.log(links);
