var links = document.getElementsByTagName("a");
var root_node;

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

console.log("Our parent is: " + root_node["href"]);

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
  console.log("End queue");
  current = queue.pop(); // depth-first
  // current = queue.shift(); // breadth-first
}
