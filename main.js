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
    '1----loremimpus asljdfasdfasdfasdfasdf',
    './img/desktop/01Snapshoot Portfolio.svg',
    ['javat', 'htmlt', 'csst'],
    'https://diegogagan2587.github.io/Diego-Vidal',
    'https://github.com/Diegogagan2587/Diego-Vidal',
  ),
  new JobCardData (
    'nickson',
    '2----loremimpus asljdfasdfasdfasdfasdf',
    './img/desktop/01Snapshoot Portfolio.svg',
    ['javat', 'htmlt', 'csst'],
    'https://diegogagan2587.github.io/Diego-Vidal',
    'https://github.com/Diegogagan2587/Diego-Vidal',
  ),
  new JobCardData (
    'nickson',
    '3----loremimpus asljdfasdfasdfasdfasdf',
    './img/desktop/01Snapshoot Portfolio.svg',
    ['javat', 'htmlt', 'csst'],
    'https://diegogagan2587.github.io/Diego-Vidal',
    'https://github.com/Diegogagan2587/Diego-Vidal',
  ),
  new JobCardData (
    'nickson',
    '4----loremimpus asljdfasdfasdfasdfasdf',
    './img/desktop/01Snapshoot Portfolio.svg',
    ['javat', 'htmlt', 'csst'],
    'https://diegogagan2587.github.io/Diego-Vidal',
    'https://github.com/Diegogagan2587/Diego-Vidal',
  ),
]


//first get a template for cards
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
for(let i = 0; i < jobCards.length; i += 1) { //index is 1 because the element 0 is the template
  const tempCard = getNewCardFrom(jobCards[i])
  if(i%2 !== 0 ) {
    //add class reverse
    tempCard.setAttribute('class','card-element card-reverse')
  }
  tempCard.querySelector('button').setAttribute('value',`${i}`);
  cardsContainer.appendChild(tempCard);
}

//now we add event listeners to see project
const seeProjectButton = document.querySelectorAll('.See-project-button');
seeProjectButton.forEach(element => {
  element.addEventListener('click', setPopUpData );
  element.addEventListener('click', openPopUp );
});

//------------------Start Pop-up fuction --------------------------------------------//
function setPopUpData(e){
  const popUpContainer = document.querySelector('.porfolio_pop-up_main-container');
  let dataIndex = e.srcElement.value; 
  //name
  console.log(jobCards)
  popUpContainer.querySelector('h2').innerText=`${jobCards[dataIndex]['name']}`;
  //description
  popUpContainer.querySelector('p').innerText=`${jobCards[dataIndex]['description']}`;
  //img
  popUpContainer.querySelector('.preview').src = `${jobCards[dataIndex]['img']}`;
  //tech
  const tagsData = jobCards[dataIndex]['technologies'];
  const tagsElements = popUpContainer.querySelector('.technology-tags').querySelectorAll('li');
  console.log('tags data=', tagsData)
  
  for (let i = 0; i<tagsElements.length; i += 1 ) { 
    tagsElements[i].innerText = `${jobCards[dataIndex]['technologies'][i]}`;
  }
  console.log('lis to put tags=',tagsElements)
  //live version
  document.querySelector('#see-live').querySelector('a').href=`${jobCards[dataIndex]['liveVersion']}`;
  console.log(jobCards[dataIndex]['liveVersion'])
  //link source
  document.querySelector('#see-source').querySelector('a').href=`${jobCards[dataIndex]['source']}`;
}
//------------------end Pop-up fuction --------------------------------------------//

