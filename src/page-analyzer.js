function isItAnArticle(document) {
    let heuristics = [
        () => !!document.querySelectorAll('[itemtype^="http://schema.org/"], [itemtype$="Article"]').length, 	
        () => !!document.querySelectorAll('[property="og:type"], [content^="video"]').length,
        () => !!document.querySelectorAll('[property="og:type"], [content^="article"]').length
    ]

    for (var i=0; i<heuristics.length; i++) {
        if (heuristics[i]()) {
            return true;
        }
    }
    return false;
}

export { 
    isItAnArticle
};