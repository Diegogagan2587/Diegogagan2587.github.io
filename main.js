function displayMobileMenu(){
    console.log('runing displayMobileMenu');
    const navMobileList = document.getElementById('nav-desktop-list');
    var menuDisplay = window.getComputedStyle(navMobileList).display;
    if(menuDisplay === 'none') {
        navMobileList.style.display = 'block';
    } else {
        navMobileList.style.display = 'none';
    }
}

function exitMobileMenu(){
    console.log('runing exitMobileMenu');
    const navMobileList = document.getElementById('nav-desktop-list');
    var menuDisplay = window.getComputedStyle(navMobileList).display;
    if(menuDisplay === 'block') {
        navMobileList.style.display = 'none';
    }
}

//heper functiosn upwards;

//atach event listener and add the fuction
const exit = document.getElementById('exit');
const navListAnchors = document.getElementById('nav-desktop-list').querySelectorAll('a');
console.log(navListAnchors)
const hamburgerBtn = document.getElementById('hamburgerBtn');//sintax is correct;
console.log('navIconMenu ===',hamburgerBtn);

// Display menu

hamburgerBtn.addEventListener('click', displayMobileMenu);

// Exit menu

exit.addEventListener('click', exitMobileMenu);

for(let i =0; i<navListAnchors.length; i++){
    navListAnchors[i].addEventListener('click', exitMobileMenu);
}

