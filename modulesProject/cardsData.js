function JobCardData(
  name,
  description,
  img,
  technologies,
  liveVersion,
  source,
  descriptionDesk,
  imgDesk,
  imgPopMobile,
) {
  this.name = name;
  this.description = description;
  this.img = img;
  this.technologies = technologies;
  this.liveVersion = liveVersion;
  this.source = source;
  this.descriptionDesk = descriptionDesk;
  this.imgDesk = imgDesk;
  this.imgPopMobile = imgPopMobile;
}

const jobCards = [
  new JobCardData(
    'Metrics Webapp',
    'A Mobile web application to check a list of metrics (numeric values) making use of React and Redux.',
    './img/projects/metrics-web-app.png',
    ['HTML', 'CSS', 'Javascript', 'React', 'Redux'],
    'https://diegogagan2587.github.io/metrics-webapp/',
    'https://github.com/Diegogagan2587/metrics-webapp',
    'A Mobile web application to check a list of metrics (numeric values) making use of React and Redux. selected API provides numeric data, the user is able to see the data in the home page, or to look for more details in the details page.',
    './img/projects/metrics-web-app.png',
    './img/projects/metrics-web-app.png',
  ),
  new JobCardData(
    'Space Travelers',
    'Space Travelers uses the Space X API to display a list of Rockets and a list of Missions',
    './img/projects/space-travelers-hub.png',
    ['HTML', 'CSS', 'Javascript', 'React', 'Redux'],
    'https://github.com/Diegogagan2587/space-travelers/tree/development',
    'https://github.com/Diegogagan2587/space-travelers/tree/development',
    'Space Travelers uses the Space X API to display a list of Rockets and a list of Missions, the user will be able to book a rocket or a mission and also to see all the rockets and missions reserved in the My Profile page.',
    './img/projects/space-travelers-hub.png',
    './img/projects/capstone-projeect-1.png',
  ),
  new JobCardData(
    'Creative Developers',
    'A joyful celebration believing in the value of learning to code,',
    './img/projects/capstone-projeect-1.png',
    ['HTML', 'CSS', 'Javascript'],
    'https://diegogagan2587.github.io/Capstone-project-module-1/',
    'https://github.com/Diegogagan2587/Capstone-project-module-1',
    'The Creative Developers Summit is a gathering that embraces emerging software developers, focusing on the theme of persistence. This annual event aims to foster collaboration and knowledge sharing among developers interested in building robust and reliable software solutions. Attendees include enthusiasts from various domains such as database management, cloud computing, and data storage. Together, we explore innovative techniques, discuss best practices, and envision a future where persistence plays a crucial role in shaping the digital landscape. Join us to contribute and learn at this dynamic summit!',
    './img/projects/capstone-projeect-1-desktop-popup.png',
    './img/projects/capstone-projeect-1.png',
  ),
  new JobCardData(
    "Today's To Do",
    'To-Do list is a simple project to keep track of the daily activities',
    './img/projects/capstone-projeect-2.png',
    ['HTML', 'CSS', 'Javascript'],
    'https://diegogagan2587.github.io/To-Do-List/dist/index.html',
    'https://github.com/Diegogagan2587/To-Do-List',
    'To-Do list is a simple project to keep track of the daily activities, You can add, delete or mark as completed your tasks! Close the browser and retrieve your task later!',
    './img/projects/capstone-projeect-2-desktop-popup.png',
    './img/projects/capstone-projeect-2.png',
  ),
  new JobCardData(
    'Facebook 360',
    'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    './img/Snapshoot Portfolioproject-screenshot.svg',
    ['HTML', 'CSS', 'JavaScript'],
    'https://diegogagan2587.github.io/Diego-Vidal',
    'https://github.com/Diegogagan2587/Diego-Vidal',
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n \n Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
    './img/desktop/Preview-desktopxx.png',
    './img/pop-up-mobile.png',
  ),
  new JobCardData(
    'Uber Navigation',
    ' A daily selection of privately personalized reads; no accounts or sign-ups required.',
    './img/Snapshoot Portfolio2.svg',
    ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Bootstrap'],
    'https://diegogagan2587.github.io/Diego-Vidal',
    'https://github.com/Diegogagan2587/Diego-Vidal',
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n \n Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
    './img/desktop/Preview-desktopxx.png',
    './img/pop-up-mobile.png',
  ),
];

export default jobCards;
