var links = document.getElementsByTagName("div");
var root_node;

for (var i = 0; i < links.length; i++) {
  var myid = links[i].getAttribute("id");
  console.log("ID is: " + myid);
}

console.log("start BFS");

var filter = new RegExp("irst-parent");

for (var i = 0; i < links.length; i++) {
  var result = links[i].id.search(filter);
  console.log("position: " + result + " " + links[i].id);
  if (result >= 0) {
    root_node = links[i].parentNode;
  }
}

console.log("Our parent is: " + root_node["id"]);

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
