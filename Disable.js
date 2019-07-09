var links = document.getElementsByTagName("a");

for (var i = 0; i < links.length; i++) {
  var href = links[i].getAttribute("rel");
  links[i].removeAttribute("rel");
  links[i].href = href;
}

// TODO
// 1. Verify the order is the same from one email to another.
// 2. Use last chome link before and first chrome link after to find candidate parent nodes.
// 3. How challenging is it to find the actual parent node on a random email?
