import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXTwitter,
  faLinkedinIn,
  faGithub,
  faAngellist,
  faMedium,
} from '@fortawesome/free-brands-svg-icons';

const SocialMediaBar = () => {
  return (
    <div id="social-media">
      <h2>Social Media</h2>
      <ul className="flex gap-5 text-2xl text-[#505F79]">
        <li>
          <a href="">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a href="">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>
        <li>
          <a href="">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
        </li>

        <li>
          <a href="">
          <FontAwesomeIcon icon={faAngellist} />
          </a>
        </li>
        <li>
          <a href="">
          <FontAwesomeIcon icon={faMedium} />
          </a>
        </li>
      </ul>
    </div>
  );
};
export default SocialMediaBar;
