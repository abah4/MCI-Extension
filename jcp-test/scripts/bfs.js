console.log("***************************************************************************");
console.log("***************************************************************************");

var links = document.getElementsByTagName("a");

function filter_links(links) {
  var matching = new Array;
  var filter = new RegExp('.+s$');

  for(var i = 0; i < links.length; i++) {
    var result = links[i].text.search(filter)
    console.log("position: " + result + " " + links[i].text);
    if (result >= 0) {
      matching.push(links[i]);
      console.log("adding: " + links[i].text);
    }
  }

  return matching;
}

var ms = filter_links(links);

console.log("***************************************************************************");
console.log("***************************************************************************");

for (var i = 0; i < ms.length; i++) {
  var href = ms[i].href;
  console.log(ms[i].text);
  console.log("\n");
}

console.log("***************************************************************************");
console.log("***************************************************************************");
