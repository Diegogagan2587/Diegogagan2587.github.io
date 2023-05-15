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
const hamburgerBtn = document.getElementById('hamburgerBtn');//sintax is correct;
console.log('navIconMenu ===',hamburgerBtn);
hamburgerBtn.addEventListener('click', displayMobileMenu);
exit.addEventListener('click', exitMobileMenu);

