import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXTwitter,
  faLinkedinIn,
  faGithub,
  faAngellist,
  faMedium,
} from '@fortawesome/free-brands-svg-icons';

const SocialMediaBar = () => {
    const GITHUB_URL = 'https://github.com/Diegogagan2587'
    const LINKEDIN_URL = 'https://www.linkedin.com/in/diego-vidal-lopez/'
    const TWITTER_URL = 'https://twitter.com/dieg02587'
    const ANGELLIST_URL = 'https://wellfound.com/u/diego-vidal-lopez'
    const MEDIUM_URL = 'https://medium.com/@diego27796gagan'

  return (
    <div id="social-media" className='flex flex-col gap-4'>
      <span className="text-base font-medium text-[#7F8CFF]">
        LET&apos;S CONNECT
      </span>
      <ul className="h-5 
      flex gap-5 items-center text-xl text-[#505F79]">
        <li>
          <a href={GITHUB_URL} target='_blank' rel='noreferrer' >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          {/* I add and <a> that opens a link in an new tab in next line */}
        </li>
        <li>
        <a href={LINKEDIN_URL} target='_blank' rel='noreferrer' >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>
        <li>
          <a href={TWITTER_URL} target='_blank' rel='noreferrer' >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
        </li>

        <li>
        <a href={ANGELLIST_URL} target='_blank' rel='noreferrer' >
          <FontAwesomeIcon icon={faAngellist} />
          </a>
        </li>
        <li>
        <a href={MEDIUM_URL} target='_blank' rel='noreferrer' >
          <FontAwesomeIcon icon={faMedium} />
          </a>
        </li>
      </ul>
    </div>
  );
};
export default SocialMediaBar;
