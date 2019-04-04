var links = document.getElementsByTagName("a");

    for (var i = 0; i < links.length; i++) {
        var href = links[i].href;
        links[i].setAttribute("rel", href);
        links[i].href = "javascript:;"
    }
