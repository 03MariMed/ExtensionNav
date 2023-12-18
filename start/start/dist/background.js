//add listener here
chrome.runtime.onMessage.addListener(function (msg, sender, 
    sendResponse) {
    if (msg.action === 'updateIcon') {
    chrome.browserAction.setIcon({ imageData: 
    drawIcon(msg.value) });
    }
    });
    //tomado de la extensión Energy Lollipop, ¡buena característica!
    function drawIcon(value) {
    let canvas = document.createElement('canvas');
    let context = canvas.getContext('2d');
    context.beginPath();
    context.fillStyle = value.color;
    context.arc(100, 100, 50, 0, 2 * Math.PI);
    context.fill();
    return context.getImageData(50, 50, 100, 100);
    }
//borrowed from energy lollipop extension
//draw the icon here
