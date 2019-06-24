var links = document.getElementsByTagName("a");
var root_node;

/*var links = [];
var root_node = document.querySelectorAll("div");

console.log("We found this many things: " + root_node.length);
console.log("It has the following attributes: " + root_node.classList);

var parent_node = root_node.parentNode;
console.log("Our parent has ID: " + parent_node["id"]);
console.log("Our parent has class: " + parent_node["class"]);
console.log("Our parent is: " + parent_node);
Array.prototype.slice.call(parent_node.attributes).forEach(function(item) {
	console.log(item.name + ': '+ item.value);
});*/

for (var i = 0; i < links.length; i++) {
  var href = links[i].getAttribute("rel");
  console.log("Link is: " + href);
}

console.log("start BFS");

var filter = new RegExp("umbc");

for (var i = 0; i < links.length; i++) {
  var result = links[i].href.search(filter);
  console.log("position: " + result + " " + links[i].href);
  if (result >= 0) {
    root_node = links[i].parentNode;
  }
}

console.log("Our parent has ID: " + root_node["id"]);
console.log("Our parent has class: " + root_node["class"]);
console.log("Our parent is: " + root_node);
console.log("Attributes inside parent: ");
Array.prototype.slice.call(root_node.attributes).forEach(function(item) {
  console.log(item.name + ": " + item.value);
});

var queue = [];

console.log("popping nothing: " + queue.pop());

queue.push(root_node);
current = queue.pop();

var count = 0;

while (current != undefined) {
  for (let c of current.children) {
    queue.push(c);
  }
  queue = queue.flat();

  console.log("Visiting: " + current.id);

  console.log("Queue: ");
  for (let o of queue) {
    console.log(o);
  }

  if (current.hasAttributes()) {
    var attrs = current.attributes;
    for (var i = 0; i < attrs.length; i++) {
      console.log("Name: " + attrs[i].name + " Value: " + attrs[i].value);
    }
  } else {
    console.log("No attributes to show");
  }

  console.log("End queue");
  current = queue.pop(); // depth-first
  // current = queue.shift(); // breadth-first
}

// Starting code for the search for our candidate div
var list = document.querySelectorAll("div[dir='ltr']");
var arr_list = Array.from(list.entries());
console.log("Pre-filter Count: " + arr_list.length);

function remove_low_dir_divs(d) {
  console.log("Examining: " + d + " of type " + d[1].nodeName);
  console.log("elements: " + d[1].childElementCount);

  console.log(
    "********************************************************************************"
  );
  console.log(d[1].innerHTML);
  console.log(
    "********************************************************************************"
  );

  return d[1].childElementCount > 2;
}

filtered = arr_list.filter(remove_low_dir_divs);

console.log(filtered);
console.log("Post-filter count: " + filtered.length);

console.log("Done!");
