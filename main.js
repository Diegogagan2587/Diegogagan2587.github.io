function displayMobileMenu() {
  document.getElementById('nav-list-top').className = 'nav-list-top-dropMobile';
}

function exitMobileMenu() {
  document.getElementById('nav-list-top').className = 'nav-list-top';
}

// heper functiosn upwards;
const exit = document.getElementById('exit');
const navListAnchors = document.getElementById('nav-list-top').querySelectorAll('a');
const hamburgerBtn = document.getElementById('hamburgerBtn');

// add event listeners;
hamburgerBtn.addEventListener('click', displayMobileMenu);
exit.addEventListener('click', exitMobileMenu);
for (let i = 0; i < navListAnchors.length; i += 1) {
  navListAnchors[i].addEventListener('click', exitMobileMenu);
}

 //------------------Work Section and cards ------------------//