/*global chrome*/
const apiKey = '053aab839af5baf1545343cd81cf0c48';
const appId = '3fba88c5';
const aylienApi = 'https://api.aylien.com/api/v1';

'use strict';

// chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
//     console.log(response.farewell);
//   });

// universal Web Extension
window.browser = window.chrome ||  window.msBrowser || window.browser ;


//TODO 
window.onload = function () {
    const newDiv = document.createElement("div");
    
    

    newDiv.setAttribute("id", "markusExtend");
    newDiv.innerHTML = "yolo content"
    document.body.appendChild(newDiv);

    /*
    https://developer.chrome.com/extensions/runtime#event-onMessage
    Fired when a message is sent from either an extension process 
    (by runtime.sendMessage) or a content script (by tabs.sendMessage).
    // */
    // chrome.tabs.sendMessage(EXTENSION_ID,{user: {uid:"hasasdasd uid"}}, function(response) {
    //     console.log("popup respone", response.res);
    //     //https://stackoverflow.com/questions/20077487/chrome-extension-message-passing-response-not-sent
    //     return true
    // });

    fetch(`${aylienApi}/concepts/?url=${window.location.href}`, {
        headers: {
            'X-AYLIEN-TextAPI-Application-Key': apiKey,
            'X-AYLIEN-TextAPI-Application-ID': appId,
        }
    })
        .then(
            response => {
                console.log('response', response);
            }
        ).catch(console.log)
    
     console.log("wasaasaw", document);

}
