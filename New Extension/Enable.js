console.log("Attempting to enable link");

var links = document.getElementsByTagName("a");

for (var i = 0; i < links.length; i++) {
        var href = links[i].getAttribute("rel");
        links[i].removeAttribute("rel");
        links[i].href = href
        console.log(href);
    };

console.log('Done enabling links');
