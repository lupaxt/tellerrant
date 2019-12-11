function isItAnArticle(document) {
    let heuristics = [
        () => !!document.querySelectorAll('[itemtype^="http://schema.org/"], [itemtype$="Article"]').length, 	
        () => !!document.querySelectorAll('[property="og:type"], [content^="video"]').length,
        () => !!document.querySelectorAll('[property="og:type"], [content^="article"]').length,
        () => !!document.getElementsByTagName("h1").length
    ]

    for (var i=0; i<heuristics.length; i++) {
        if (heuristics[i]()) {
            return true;
        }
    }
    return false;
}

function extractHeading(document) {
    const headings = document.getElementsByTagName("h1");
    if (!headings.length) {
        throw new Error("No Title found")
    }

    return headings[0].innerHTML;
} 

export { 
    isItAnArticle,
    extractHeading
};