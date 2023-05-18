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
  document.getElementById('portfolio-pupUp-background').querySelector('.technology-tags').innerHTML = null;
}

// heper functiosn upwards;
const exit = document.getElementById('exit');
const navListAnchors = document.getElementById('nav-list-top').querySelectorAll('a');
const hamburgerBtn = document.getElementById('hamburgerBtn');
const portfolioPopUpCloseBtn = document.getElementById('portfolioPopUpCloseBtn');

// add event listeners;
hamburgerBtn.addEventListener('click', displayMobileMenu);
portfolioPopUpCloseBtn.addEventListener('click', exitPopUp);

exit.addEventListener('click', exitMobileMenu);
for (let i = 0; i < navListAnchors.length; i += 1) {
  navListAnchors[i].addEventListener('click', exitMobileMenu);
}

// ------------------Start Work Section and cards --------------------------------------------//
function JobCardData(name, description, img, technologies, liveVersion, source) {
  this.name = name;
  this.description = description;
  this.img = img;
  this.technologies = technologies;
  this.liveVersion = liveVersion;
  this.source = source;
}

const jobCards = [
  new JobCardData(
    'Tonic',
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n \n Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
    './img/poup-preview.png',
    ['javat1', 'htmlt1', 'csst'],
    'https://diegogagan2587.github.io/Diego-Vidal',
    'https://github.com/Diegogagan2587/Diego-Vidal',
  ),
  new JobCardData(
    'nickson',
    '2----loremimpus asljdfasdfasdfasdfasdf',
    './img/desktop/01Snapshoot Portfolio.svg',
    ['javat2', 'htmlt2', 'csst'],
    'https://diegogagan2587.github.io/Diego-Vidal',
    'https://github.com/Diegogagan2587/Diego-Vidal',
  ),
  new JobCardData(
    'nickson',
    '3----loremimpus asljdfasdfasdfasdfasdf',
    './img/desktop/01Snapshoot Portfolio.svg',
    ['javat3', 'htmlt3', 'csst'],
    'https://diegogagan2587.github.io/Diego-Vidal',
    'https://github.com/Diegogagan2587/Diego-Vidal',
  ),
  new JobCardData(
    'nickson',
    '4----loremimpus asljdfasdfasdfasdfasdf',
    './img/desktop/01Snapshoot Portfolio.svg',
    ['javat4', 'htmlt4', 'csst4', 'rubi', 'git'],
    'https://diegogagan2587.github.io/Diego-Vidal',
    'https://github.com/Diegogagan2587/Diego-Vidal',
  ),
];

// first get a template for cards
const jobCardTemplate = document.getElementById('card-element');

function getNewCardFrom(obj) {
  // first we copy the template
  const newCardFromTemplate = jobCardTemplate.cloneNode(true);
  // then we modife the content;
  // name
  newCardFromTemplate.querySelector('.project-name').innerText = `${obj.name}`;
  // description
  newCardFromTemplate.querySelector('.card-main-text').innerText = `${obj.description}`;
  // img
  newCardFromTemplate.querySelector('img').src = `${obj.img}`;
  // tech
  const tagsContainer = newCardFromTemplate.querySelector('.technology-tags');
  for (let ind = 0; ind < obj.technologies.length; ind += 1) {
    const newList = document.createElement('li');
    newList.innerText = `${obj.technologies[ind]}`;
    tagsContainer.appendChild(newList);
  }

  return newCardFromTemplate;
}

// then we append a card for each obj within the arr;
const cardsContainer = document.querySelector('.cards-container');
for (let i = 0; i < jobCards.length; i += 1) { // index is 1 because the element 0 is the template
  const tempCard = getNewCardFrom(jobCards[i]);
  if (i % 2 !== 0) {
    // add class reverse
    tempCard.setAttribute('class', 'card-element card-reverse');
  }
  tempCard.querySelector('button').setAttribute('value', `${i}`);
  cardsContainer.appendChild(tempCard);
}

// ------------------Start Pop-up fuction --------------------------------------------//
function setPopUpData(e) {
  const popUpContainer = document.querySelector('.porfolio_pop-up_main-container');
  const dataIndex = e.srcElement.value;
  // name
  popUpContainer.querySelector('h2').innerText = `${jobCards[dataIndex].name}`;
  // description
  popUpContainer.querySelector('p').innerText = `${jobCards[dataIndex].description}`;
  // img
  popUpContainer.querySelector('.preview').src = `${jobCards[dataIndex].img}`;
  // tech
  const tagsContainer = popUpContainer.querySelector('.technology-tags');

  for (let i = 0; i < jobCards[dataIndex].technologies.length; i += 1) {
    const newListElement = document.createElement('li');
    newListElement.innerText = `${jobCards[dataIndex].technologies[i]}`;
    tagsContainer.appendChild(newListElement);
  }

  // live version
  document.querySelector('#see-live').querySelector('a').href = `${jobCards[dataIndex].liveVersion}`;
  // link source
  document.querySelector('#see-source').querySelector('a').href = `${jobCards[dataIndex].source}`;
}
// ------------------end Pop-up fuction --------------------------------------------//

// now we add event listeners to see project
const seeProjectButton = document.querySelectorAll('.See-project-button');
seeProjectButton.forEach((element) => {
  element.addEventListener('click', setPopUpData);
  element.addEventListener('click', openPopUp);
});

// -------Start Section Form Validations-----------------//
// variables
const contactForm = document.getElementById('contac-form');
const submitBtn = contactForm.querySelector('#get-in-touch');
const spanError = document.querySelector('.error');
// functions

function validationForm(event) {
  let result;
  const text = contactForm.email.value;
  if (text === text.toLowerCase()) {
    spanError.textContent = null;
    result = true;
  } else {
    spanError.textContent = 'Email must to be in lower case';
    result = false;
    event.preventDefault();
  }
  return result;
}

// events listeners

submitBtn.addEventListener('click', validationForm);

// -------Start Section Form Validations-----------------//

// -------Start Local Storage Section ------------------//
//Const

const formName = contactForm.querySelector('#name');
const formEmail = contactForm.querySelector('#email-input');
const formMsg = contactForm.querySelector('#user-message');

formName.onchange= saveFormData;
formEmail.onchange= saveFormData;
formMsg.onchange= saveFormData;

//create an object to save data from form;
const formData = {
  name: '',
  email: '',
  message: '',
};
// first we check if available localStorage, need to create a function to do so

//we have to add on change on varialbes that we wan to track, and set a function to update the values if any change; myElement.onchange = myFunction;
function saveInLocalStorage(){
 // console.log('runing saveInLocalStorge');
 // console.log( JSON.stringify(formData) );
  localStorage.setItem( 'formData' , JSON.stringify(formData) );
}

function saveFormData(){
 // console.log('Runing saveFormData');
  formData['name'] = formName.value;
  formData['email'] = formEmail.value;
  formData['message'] = formMsg.value;
//  console.log(formData);
  saveInLocalStorage();
}

function getLocalStorage() {
  const currentData = localStorage.getItem('formData');
  const getFormData = JSON.parse(currentData);
  formData.name = getFormData.name;
  formData.email = getFormData.email;
  formData.message = getFormData.message;
  console.log(formData);
  
  displayFromLocalStorage();
//  return getFormData
}

function displayFromLocalStorage() {
}

getLocalStorage();

//saveFormData();

// -------End Local Storage Section ------------------//

