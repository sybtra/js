let myImage = document.querySelector('img');
myImage.setAttribute('alt','initial image');
myImage.onclick = () => {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src','images/firefox2.png');
        myImage.setAttribute('alt', 'my image is firefox2.png');
    } else {
        myImage.setAttribute('src','images/firefox-icon.png');
        myImage.setAttribute('alt', 'my image is firefox-icon.png');
    }
}