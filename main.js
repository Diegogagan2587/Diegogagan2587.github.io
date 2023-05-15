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

//heper functiosn upwards;

//atach event listener and add the fuction
const hamburgerBtn = document.getElementById('hamburgerBtn');//sintax is correct;
console.log('navIconMenu ===',hamburgerBtn);
hamburgerBtn.addEventListener('click', displayMobileMenu);

