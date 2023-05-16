function displayMobileMenu(){
    document.getElementById('nav-list-top').className = "nav-list-top-dropMobile";
}

function exitMobileMenu(){
    document.getElementById('nav-list-top').className = "nav-list-top";
}

//heper functiosn upwards;

//atach event listener and add the fuction
const exit = document.getElementById('exit');
const navListAnchors = document.getElementById('nav-list-top').querySelectorAll('a');
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

