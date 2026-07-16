console.log("I'm in script.js file now.");
let menuIsHidden = true;

function onClickMenuList() {
    console.log("onClickMenuList fired!");
    let sideMenu = document.querySelector('.menu-list');
    if(menuIsHidden === true) {
        sideMenu.style.left = '0';
        console.log("left set 0");
        menuIsHidden = false;
    }
    else {
        sideMenu.style.left = '-250px';    
        console.log("left set -250");
        menuIsHidden = true;
    }
}

const menuLabel = document.querySelector('.menu-icon');
menuLabel.addEventListener('click', () => {
    onClickMenuList();
});

function openInNewWindow(img) {
    console.log('Open window called.');
    window.open(img.src, '_blank');
}
