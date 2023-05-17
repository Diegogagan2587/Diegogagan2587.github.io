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
const portfolioPopUpCloseBtn = document.getElementById('portfolioPopUpCloseBtn')

// add event listeners;
hamburgerBtn.addEventListener('click', displayMobileMenu);
portfolioPopUpCloseBtn.addEventListener('click', exitPopUp)

exit.addEventListener('click', exitMobileMenu);
for (let i = 0; i < navListAnchors.length; i += 1) {
  navListAnchors[i].addEventListener('click', exitMobileMenu);
}

//------------------Start Work Section and cards --------------------------------------------//
function JobCardData (name, description, img, technologies, liveVersion, source) {
  this.name = name;
  this.description = description;
  this.img = img;
  this.technologies = technologies;
  this.liveVersion = liveVersion;
  this.source = source;
}

const jobCards = [
   new JobCardData (
    'nickson',
    '2----loremimpus asljdfasdfasdfasdfasdf',
    './img/desktop/01Snapshoot Portfolio.svg',
    ['javat', 'htmlt', 'csst'],
    'https://diegogagan2587.github.io/Diego-Vidal/#',
    'https://github.com/Diegogagan2587/Diego-Vidal',
  ),
  new JobCardData (
    'nickson',
    '3----loremimpus asljdfasdfasdfasdfasdf',
    './img/desktop/01Snapshoot Portfolio.svg',
    ['javat', 'htmlt', 'csst'],
    'https://diegogagan2587.github.io/Diego-Vidal/#',
    'https://github.com/Diegogagan2587/Diego-Vidal',
  ),
  new JobCardData (
    'nickson',
    '4----loremimpus asljdfasdfasdfasdfasdf',
    './img/desktop/01Snapshoot Portfolio.svg',
    ['javat', 'htmlt', 'csst'],
    'https://diegogagan2587.github.io/Diego-Vidal/#',
    'https://github.com/Diegogagan2587/Diego-Vidal',
  ),
]


//first get a template
const jobCardTemplate = document.getElementById('card-element')
function getNewCardFrom(obj) {
   //first we copy the template
   let newCardFromTemplate = jobCardTemplate.cloneNode(true);
   //then we modife the content;
    //name
    newCardFromTemplate.querySelector('.project-name').innerText = `${obj['name']}`;
    //description
    newCardFromTemplate.querySelector('.card-main-text').innerText = `${obj['description']}`;
    //img
    newCardFromTemplate.querySelector('img').src = `${obj['img']}`;
    //tech
    const techTagsContainer = newCardFromTemplate.querySelector('.technology-tags');
    const techTags = techTagsContainer.querySelectorAll('li');
    for (let i = 0; i<techTags.length; i += 1 ) {
      techTags[i].innerText = `${obj['technologies'][i]}`;
    }
    return newCardFromTemplate;
}

//then we append a card for each obj within the arr;
const cardsContainer = document.querySelector('.cards-container');
for(let i = 0; i < jobCards.length; i += 1) {
  const tempCard = getNewCardFrom(jobCards[i])
  if(i%2 == 0) {
    //add class reverse
    tempCard.setAttribute('class','card-element card-reverse')
  }
  cardsContainer.appendChild(tempCard);
}

//now we add event listeners to see project
const seeProjectButton = document.querySelectorAll('.See-project-button');
seeProjectButton.forEach(element => {
  element.addEventListener('click', openPopUp );
});
