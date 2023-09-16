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
  company,
  typeOfDev,
  date,
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
  this.company = company;
  this.typeOfDev = typeOfDev;
  this.date = date;
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
    'Self-employed',
    'Front-End',
    '2023',
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
    'Self-employed',
    'Front-End',
    '2023',
  ),
  new JobCardData(
    'Math Magicians',
    '"Math magicias" is a single Page App (SPA) that allows users to make simple calculations and Read Random math-related quotes.',
    './img/projects/Math-Magicians.png',
    ['HTML', 'CSS', 'Javascript', 'React'],
    'https://math-magicians-akxg.onrender.com/',
    'https://github.com/Diegogagan2587/math-magicians',
    '"Math magicias" is a single Page App (SPA) that allows users to make simple calculations and Read Random math-related quotes. We used React for building this app.',
    './img/projects/Math-Magicians.png',
    './img/projects/Math-Magicians.png',
    'Self-employed',
    'Front-End',
    '2023',
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
    'Self-employed',
    'Front-End',
    '2023',
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
    'Self-employed',
    'Front-End',
    '2023',
  ),
  new JobCardData(
    'world Wide Flags',
    'World Wide Flags is a project we have built based on an external API. We have selected a countries API that provides the data.',
    './img/projects/world-wide-flags.png',
    ['HTML', 'CSS', 'JavaScript'],
    'https://diegogagan2587.github.io/JavaScript-Capstone-wwFlags/dist/',
    'https://github.com/Diegogagan2587/JavaScript-Capstone-wwFlags',
    'world Wide Flags is a project we have built based on an external API. We have selected a countries API that provides data related to the country, such as population, sub-region, and the country flag. This web app includes two user interfaces, a home page and a pop up with more data.',
    './img/projects/world-wide-flags.png',
    './img/projects/world-wide-flags.png',
    'Self-employed',
    'Front-End',
    '2023',
  ),
  new JobCardData(
    'Awesome Books',
    'Awesome Books is a simple website that stores a booklist, allowing you to revisit it later and add or remove any books you would like to read.',
    './img/projects/awesome-books.png',
    ['HTML', 'CSS', 'JavaScript'],
    'https://diegogagan2587.github.io/AwesomeBook-with-ES6/',
    'https://github.com/Diegogagan2587/AwesomeBook-with-ES6',
    'Awesome Books is a simple website that stores a booklist, allowing you to revisit it later and add or remove any books you would like to read. The inner workings of this project rely on JavaScript to dynamically generate the list of books based on user input and also make use of localStorage.',
    './img/projects/awesome-books.png',
    './img/projects/awesome-books.png',
    'Self-employed',
    'Front-End',
    '2023',
  ),
  new JobCardData(
    'Tribute Page',
    'Tribute page is a static website dedicated to Dr. Norman Borlaug, it was written using basic html and css',
    './img/projects/tribute-page.png',
    ['HTML', 'CSS'],
    'https://diegogagan2587.github.io/tribute-page/',
    'https://github.com/Diegogagan2587/tribute-page',
    'Tribute page is a static website dedicated to Dr. Norman Borlaug, it was written using basic html and css and it is a clone page that was builded to put in practice basic skills for html and css. Nothing more complex than that',
    './img/projects/tribute-page.png',
    './img/projects/tribute-page.png',
    'Self-employed',
    'Front-End',
    '2020',
  ),
];

export default jobCards;
