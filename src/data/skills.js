import JavaScriptIcon from '../assets/icons/skills/icons8-javascript-96.png';
import htmlIcon       from '../assets/icons/skills/icons8-html-96.png';
import cssIcon       from '../assets/icons/skills/icons8-css-96.png';
import reactIcon       from '../assets/icons/skills/icons8-react-native-96.png';
import reduxIcon       from '../assets/icons/skills/icons8-redux-96.png';
import railsIcon       from '../assets/icons/skills/rails.svg';
import rubyIcon       from '../assets/icons/skills/icons8-ruby-programming-language-96.png';
import Tailwind       from '../assets/icons/skills/icons8-tailwind-css-96.png';
import PostgreSQL       from '../assets/icons/skills/icons8-postgresql-96.png';
import git       from '../assets/icons/skills/icons8-git-96.png';
import github       from '../assets/icons/skills/icons8-github-96.png';
import vite       from '../assets/icons/skills/icons8-vite-96.png';
import Webpack       from '../assets/icons/skills/icons8-webpack-96.png';
import jest       from '../assets/icons/skills/jest-js-icon.svg';
import rspec       from '../assets/icons/skills/file-type-rspec.svg';
import render       from '../assets/icons/skills/render.com.svg';
import postman       from '../assets/icons/skills/postman-tutorial.png';
import gitflow       from '../assets/icons/skills/icons8-merge-git-96.png';
import mobile       from '../assets/icons/skills/icons8-mobile-96.png';
import test      from '../assets/icons/skills/icons8-test-96.png';
import mvc     from '../assets/icons/skills/icons8-connect-96.png';



const skills = [
    {
        name: 'Languages',
        list: [
            {name:'JavaScript', icon:JavaScriptIcon },
            {name:'HTML5', icon:htmlIcon },
            {name:'CSS3', icon:cssIcon },
            {name:'Ruby', icon:rubyIcon },
        ],
    },
    {
        name: 'Libraries/Frameworks',
        list: [
            {name:'React', icon:reactIcon },
            {name:'Redux', icon:reduxIcon },
            {name:'Rails', icon:railsIcon },
            {name:'Tailwind CSS', icon:Tailwind },
        ],
    },
    {
        name: 'Tools, Platforms && Methodologies',
        list: [
            {name:'PostgreSQL', icon:PostgreSQL },
            {name:'Git', icon:git },
            {name:'Github', icon:github },
            {name:'Vite', icon:vite },
            {name:'Webpack', icon:Webpack },
            {name:'Jest', icon:jest },
            {name:'Rspec', icon:rspec },
            {name:'Render', icon:render },
            {name:'Postman', icon:postman },
            {name:'Gitflow', icon:gitflow },
            {name:'Mobile First', icon:mobile },
            {name:'TDD', icon:test },
            {name:'MVC', icon:mvc },
        ],

    },
    {
        name: 'Skills',
        list: [
            {name:'Remote Pair-Programming', icon:'' },
            {name:'Code review', icon:'' },
            {name:'Teamwork', icon:'' },
            {name:'Time Management', icon:'' },
            {name:'Cross-cultural,', icon:'' },
            {name:'Constructive feedback', icon:'' },

        ],
    },
];

export default skills;