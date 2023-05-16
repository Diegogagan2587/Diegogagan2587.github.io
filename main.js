function displayMobileMenu() {
  document.getElementById('nav-list-top').className = 'nav-list-top-dropMobile';
}

function exitMobileMenu() {
  document.getElementById('nav-list-top').className = 'nav-list-top';
}

function openPopUp() {
  document.getElementById('portfolio-pupUp-background').className = 'portfolio-pupUp-backgroundOpen';
}

function exitPopUp() {
  document.getElementById('portfolio-pupUp-background').className = 'portfolio-pupUp-backgroundClose';
}

// heper functiosn upwards;
const exit = document.getElementById('exit');
const navListAnchors = document.getElementById('nav-list-top').querySelectorAll('a');
const hamburgerBtn = document.getElementById('hamburgerBtn');
const seeProjectButton = document.querySelector('.See-project-button')
const portfolioPopUpCloseBtn = document.getElementById('portfolioPopUpCloseBtn')

// add event listeners;
hamburgerBtn.addEventListener('click', displayMobileMenu);
seeProjectButton.addEventListener('click', openPopUp)
portfolioPopUpCloseBtn.addEventListener('click', exitPopUp)

exit.addEventListener('click', exitMobileMenu);
for (let i = 0; i < navListAnchors.length; i += 1) {
  navListAnchors[i].addEventListener('click', exitMobileMenu);
}

 //------------------Work Section and cards ------------------//