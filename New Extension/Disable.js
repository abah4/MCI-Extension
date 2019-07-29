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


// Finding common parents

// Produces a path to the node from the root
function parents(node) {
  var nodes = [node];
  for (; node; node = node.parentNode) {
    nodes.unshift(node);
  }
  return nodes;
}

function commonAncestor(node1, node2) {
  var parents1 = parents(node1);
  var parents2 = parents(node2);

  if (parents1[0] != parents2[0]) {
   console.log("No common ancestor!");
  }

  for (var i = 0; i < parents1.length; i++) {
    if (parents1[i] != parents2[i]) return parents1[i - 1];
  }

}

var r1 = document.querySelectorAll('a[href*="https://hangouts.google.com/"]');
var r2 = document.querySelectorAll('a[href*="https://drive.google.com/u/0/settings/storage?hl=en&utm_medium=web&utm_source=gmail"]');

var commonParent = commonAncestor(r1[0],r2[0]);

console.log("Common Parent: ");
console.log(commonParent);

console.log("Path from child to parent: ");
var tree = parents(commonParent); //shown path of the node to the root

console.log(tree);

console.log("****************************************************")

console.log(tree[2].previousElementSibling);
console.log(tree[2].nextElementSibling);

console.log("****************************************************");

var getSiblings = function (elem) {
	var siblings = [];
	var sibling = elem.parentNode.firstChild;
	for (; sibling; sibling = sibling.nextSibling) {
		if (sibling.nodeType !== 1 || sibling === elem) continue;
		siblings.push(sibling);
	}
	return siblings;
};

var siblings = getSiblings(tree[2]);
console.log(siblings);
