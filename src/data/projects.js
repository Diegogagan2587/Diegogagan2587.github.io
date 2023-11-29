import imgMetricsWebApp from '/assets/img/projects/metrics-web-app.png';
import imgSpaceTravelersHub from '/assets/img/projects/space-travelers-hub.png';
import imgMathMagicians from '/assets/img/projects/Math-Magicians.png';
import imgCreativeDevelopers from '/assets/img/projects/capstone-projeect-1.png';
import imgTodayToDo from '/assets/img/projects/capstone-projeect-2.png';
import imgWorldWideFlags from '/assets/img/projects/world-wide-flags.png';
import imgAwesomeBooks from '/assets/img/projects/awesome-books.png';
import imgDocumentationPage from '/assets/img/projects/documentation-page.png';
import imgProductLandingPage from '/assets/img/projects/landing-page-original-trombones.png';
import imgTributePage from '/assets/img/projects/tribute-page.png';
import bookAConcert from '/assets/img/projects/book-a-concert.png';
import recipeApp from '/assets/img/projects/recipe-app-best-dishes.png';
import budgetApp from '/assets/img/projects/budget-app-live-demo.png';
import catalogueOfThings from '/assets/img/projects/catalogue-of-my-things.png';

const projects = [
  {
    name: 'Book a Concert',
    company: 'Self-employed',
    typeOfDev: 'Full-stack',
    date: '2023',
    description:
      '"Book a Concert" is a Single Page Application (SPA) and an API designed to assist users in booking concerts or creating independent events for others to book.',
    descriptionDesk:
      '"Book a Concert" is a Single Page Application (SPA) and an API designed to assist users in booking concerts or creating independent events for others to book. Users can register, reserve, create independent concerts, or cancel an event if they are the organizer. Built with React, Redux, Tailwind CSS, Ruby on Rails, and PostgreSQL.',
    img: bookAConcert,
    liveVersion: 'https://book-a-concert.onrender.com/',
    source: 'https://github.com/Diegogagan2587/Book-a-concert-front-end',
    technologies: [
      'HTML5',
      'Tailwind-CSS',
      'Javascript',
      'React',
      'Redux',
      'Ruby',
      'Rails',
      'PostgreSQL',
    ],
  },
  {
    name: 'Recipe App Best Dishes',
    company: 'Self-employed',
    typeOfDev: 'Full-stack',
    date: '2023',
    description:
      'Recipe App keeps track of all your recipes and ingredients. It will allow you to save ingredients, keep track of what you have, create recipes and...',
    descriptionDesk:
      'Recipe App keeps track of all your recipes and ingredients. It will allow you to save ingredients, keep track of what you have, create recipes and generate a shopping list based on what you have and what you are missing from a recipe. Also, since sharing recipes is an important part of cooking the app should allow you to make them public so anyone can access them.',
    img: recipeApp,
    liveVersion: 'https://my-recipe-app-d41m.onrender.com/',
    source: 'https://github.com/Diegogagan2587/Recipe-app-bests-dishes',
    technologies: [
      'HTML5',
      'CSS3',
      'Bootstrap',
      'Ruby',
      'Rails',
      'PostgreSQL',
      'Rspec',
      'Capybara',
    ],
  },
  {
    name: 'Budget-App',
    company: 'Self-employed',
    typeOfDev: 'Full-stack',
    date: '2023',
    description:
      '"Budget App" is a Server-side Rendering application (SSR) following the MVC architecture, allowing users to efficiently manage their budget.',
    descriptionDesk:
      '"Budget App" is a Server-side Rendering application (SSR) following the MVC architecture, allowing users to efficiently manage their budget. Users can register, add transactions, and create new categories. The application is built with JavaScript, Ruby, Rails, Tailwind CSS, and PostgreSQL.',
    img: budgetApp,
    liveVersion: 'https://www-budget-app.onrender.com/',
    source: 'https://github.com/Diegogagan2587/budget-app',
    technologies: [
      'HTML5',
      'CSS3',
      'Tailwind-CSS',
      'Javascript',
      'Ruby',
      'Rails',
      'PostgreSQL',
      'Rspec',
      'Capybara',
    ],
  },
  {
    name: 'Catalogue of things',
    company: 'Self-employed',
    typeOfDev: 'command-line interface (CLI)',
    date: '2023',
    description:
      'Catalog of my things is a a console app that will help you to keep a record of different types of things you own: books, music albums, movies, and games. Everything is based on...',
    descriptionDesk:
      'Catalog of my things is a a console app that will help you to keep a record of different types of things you own: books, music albums, movies, and games. Everything is based on the UML class diagram presented in the Readme file. As well this app is able to preserve the data, data will be saved in the data that will contain a JSON file per each item. As well We have included a table representation in SQL.',
    img: catalogueOfThings,
    liveVersion: 'https://youtu.be/X8ozhDjzom0?si=Ej3x8mAcBtzWga1N',
    source: 'https://github.com/Diegogagan2587/catalog-of-my-things',
    technologies: [
      'Ruby',
      'JSON',
      'Rspec',
    ],
  },
  {
    name: 'Metrics Webapp',
    description:
      'A Mobile web application to check a list of metrics (numeric values) making use of React and Redux.',
    img: imgMetricsWebApp,
    technologies: ['HTML', 'CSS', 'Javascript', 'React', 'Redux'],
    liveVersion: 'https://diegogagan2587.github.io/metrics-webapp/',
    source: 'https://github.com/Diegogagan2587/metrics-webapp',
    descriptionDesk:
      'A Mobile web application to check a list of metrics (numeric values) making use of React and Redux. selected API provides numeric data, the user is able to see the data in the home page, or to look for more details in the details page.',
    imgDesk: '/assets/img/projects/metrics-web-app.png',
    imgPopMobile: '/assets/img/projects/metrics-web-app.png',
    company: 'Self-employed',
    typeOfDev: 'Front-End',
    date: '2023',
  },
  {
    name: 'Space Travelers',
    description:
      'Space Travelers uses the Space X API to display a list of Rockets and a list of Missions',
    img: imgSpaceTravelersHub,
    technologies: ['HTML', 'CSS', 'Javascript', 'React', 'Redux'],
    liveVersion:
      'https://github.com/Diegogagan2587/space-travelers/tree/development',
    source:
      'https://github.com/Diegogagan2587/space-travelers/tree/development',
    descriptionDesk:
      'Space Travelers uses the Space X API to display a list of Rockets and a list of Missions, the user will be able to book a rocket or a mission and also to see all the rockets and missions reserved in the My Profile page.',
    imgDesk: '/assets/img/projects/space-travelers-hub.png',
    imgPopMobile: '/assets/img/projects/capstone-projeect-1.png',
    company: 'Self-employed',
    typeOfDev: 'Front-End',
    date: '2023',
  },
  {
    name: 'Math Magicians',
    description:
      '"Math magician" is a single Page App (SPA) that allows users to make simple calculations and Read Random math-related quotes.',
    img: imgMathMagicians,
    technologies: ['HTML', 'CSS', 'Javascript', 'React'],
    liveVersion: 'https://math-magicians-akxg.onrender.com/',
    source: 'https://github.com/Diegogagan2587/math-magicians',
    descriptionDesk:
      '"Math Magicians" is a Single Page App (SPA) divided into three sections: Home, Quote, and Calculator. It enables users to perform simple calculations such as addition, subtraction, and multiplication, in addition to reading random math-related quotes. Built with JavaScript and React.',
    imgDesk: '/assets/img/projects/Math-Magicians.png',
    imgPopMobile: '/assets/img/projects/Math-Magicians.png',
    company: 'Self-employed',
    typeOfDev: 'Front-End',
    date: '2023',
  },
  {
    name: 'Creative Developers',
    description:
      'A joyful celebration believing in the value of learning to code.',
    img: imgCreativeDevelopers,
    technologies: ['HTML', 'CSS', 'Javascript'],
    liveVersion: 'https://diegogagan2587.github.io/Capstone-project-module-1/',
    source: 'https://github.com/Diegogagan2587/Capstone-project-module-1',
    descriptionDesk:
      'The Creative Developers Summit is a gathering that embraces emerging software developers, focusing on the theme of persistence. This annual event aims to foster collaboration and knowledge sharing among developers interested in building robust and reliable software solutions. Attendees include enthusiasts from various domains such as database management, cloud computing, and data storage. Together, we explore innovative techniques, discuss best practices, and envision a future where persistence plays a crucial role in shaping the digital landscape. Join us to contribute and learn at this dynamic summit!',
    imgDesk: '/assets/img/projects/capstone-projeect-1-desktop-popup.png',
    imgPopMobile: '/assets/img/projects/capstone-projeect-1.png',
    company: 'Self-employed',
    typeOfDev: 'Front-End',
    date: '2023',
  },
  {
    name: "Today's To Do",
    description:
      'To-Do list is a simple project to keep track of the daily activities.',
    img: imgTodayToDo,
    technologies: ['HTML', 'CSS', 'Javascript'],
    liveVersion: 'https://diegogagan2587.github.io/To-Do-List/dist/index.html',
    source: 'https://github.com/Diegogagan2587/To-Do-List',
    descriptionDesk:
      'To-Do list is a simple project to keep track of the daily activities. You can add, delete, or mark as completed your tasks! Close the browser and retrieve your task later!',
    imgDesk: '/assets/img/projects/capstone-projeect-2-desktop-popup.png',
    imgPopMobile: '/assets/img/projects/capstone-projeect-2.png',
    company: 'Self-employed',
    typeOfDev: 'Front-End',
    date: '2023',
  },
  {
    name: 'World Wide Flags',
    description:
      'World Wide Flags is a project built based on an external API. We have selected a countries API that provides data.',
    img: imgWorldWideFlags,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveVersion:
      'https://diegogagan2587.github.io/JavaScript-Capstone-wwFlags/dist/',
    source: 'https://github.com/Diegogagan2587/JavaScript-Capstone-wwFlags',
    descriptionDesk:
      'World Wide Flags is a project built based on an external API. We have selected a countries API that provides data related to the country, such as population, sub-region, and the country flag. This web app includes two user interfaces, a home page and a pop up with more data.',
    imgDesk: '/assets/img/projects/world-wide-flags.png',
    imgPopMobile: '/assets/img/projects/world-wide-flags.png',
    company: 'Self-employed',
    typeOfDev: 'Front-End',
    date: '2023',
  },

  {
    name: 'Awesome Books',
    description:
      'Awesome Books is a simple website that stores a booklist, allowing you to revisit it later and add or remove any books you would like to read.',
    img: imgAwesomeBooks,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveVersion: 'https://diegogagan2587.github.io/AwesomeBook-with-ES6/',
    source: 'https://github.com/Diegogagan2587/AwesomeBook-with-ES6',
    descriptionDesk:
      'Awesome Books is a simple website that stores a booklist, allowing you to revisit it later and add or remove any books you would like to read. The inner workings of this project rely on JavaScript to dynamically generate the list of books based on user input and also make use of localStorage.',
    imgDesk: '/assets/img/projects/awesome-books.png',
    imgPopMobile: '/assets/img/projects/awesome-books.png',
    company: 'Self-employed',
    typeOfDev: 'Front-End',
    date: '2023',
  },
  {
    name: 'JS Documentation',
    description:
      'JS documentation is a simple documentation page to serve as instruction or reference. It was built with plain HTML and CSS.',
    img: imgDocumentationPage,
    technologies: ['HTML', 'CSS'],
    liveVersion:
      'https://diegogagan2587.github.io/diegolab/rwd-projects/4-technical-Documentation-page.html',
    source:
      'https://github.com/Diegogagan2587/Diegogagan2587.github.io/tree/master/diegolab/rwd-projects',
    descriptionDesk:
      'JS documentation is a simple documentation page to serve as instruction or reference. It was built with plain HTML and CSS to put in practice HTML and CSS basic skills. The content has been taken from MDN.',
    imgDesk: '/assets/img/projects/documentation-page.png',
    imgPopMobile: '/assets/img/projects/documentation-page.png',
    company: 'Self-employed',
    typeOfDev: 'Front-End',
    date: '2020',
  },
  {
    name: 'Product Landing Page',
    description:
      'Product Landing Page is a project to market a product, in this case Original Trombones, it was built for putting in practice HTML and CSS skills by creating a static site that includes navigation, video, and a simple dummy form for submitting customer email.',
    img: imgProductLandingPage,
    technologies: ['HTML', 'CSS'],
    liveVersion: 'https://diegogagan2587.github.io/product-landing-page/',
    source: 'https://github.com/Diegogagan2587/product-landing-page',
    descriptionDesk:
      'Product Landing Page is a project to market a product, in this case Original Trombones. It was built for putting in practice HTML and CSS skills by creating a static site that includes navigation, video, and a simple dummy form for submitting customer email. The project was initially created in 2020 but has been moved to its own repository.',
    imgDesk: '/assets/img/projects/landing-page-original-trombones.png',
    imgPopMobile: '/assets/img/projects/landing-page-original-trombones.png',
    company: 'Self-employed',
    typeOfDev: 'Front-End',
    date: '2020',
  },
  {
    name: 'Tribute Page',
    description:
      'Tribute page is a static website dedicated to Dr. Norman Borlaug, it was written using basic html and css',
    img: imgTributePage,
    technologies: ['HTML', 'CSS'],
    liveVersion: 'https://diegogagan2587.github.io/tribute-page/',
    source: 'https://github.com/Diegogagan2587/tribute-page',
    descriptionDesk:
      'Tribute page is a static website dedicated to Dr. Norman Borlaug, it was written using basic html and css and it is a clone page that was built to put in practice basic skills for html and css. Nothing more complex than that',
    imgDesk: '/assets/img/projects/tribute-page.png',
    imgPopMobile: '/assets/img/projects/tribute-page.png',
    company: 'Self-employed',
    typeOfDev: 'Front-End',
    date: '2020',
  },
];

export default projects;
