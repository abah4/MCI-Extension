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

console.log("****************************************************");

var getSiblings = function (elem) {
	var siblingsParents = [];

  for (; elem && elem !== document; elem = elem.parentNode ) {

    var sibling = elem.firstChild;
	  for (; sibling; sibling = sibling.nextSibling) {
	  if (sibling.nodeType !== 1 || sibling === elem) continue;
	  siblingsParents.push(sibling);
    }
  }
  return siblingsParents;

}

var array1 = getSiblings(r1[1]);
console.log(array1);

var array2 = getSiblings(r2[0]);
console.log(array2);

console.log("****************************************************");
//Matching results

var result = array1.filter(value => array2.includes(value));

console.log(result);
