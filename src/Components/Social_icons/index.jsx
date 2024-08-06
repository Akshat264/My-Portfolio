import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
const SocialIcons=()=>{
    return(
        <div className="social_icons_ab">
              <a href="mailto:pratapsinghakshat0@gmail.com"><FontAwesomeIcon icon={faEnvelope} className="fa-2x custom-color-hover"/></a>
              <a href="https://www.facebook.com/profile.php?id=100057693212935"><FontAwesomeIcon icon={faFacebook} className="fa-2x custom-color-hover"/></a>
              <a href="https://github.com/Akshat264"><FontAwesomeIcon icon={faGithub} className="fa-2x custom-color-hover"/></a>
              <a href="https://www.linkedin.com/in/akshat-pratap-singh-7845bb25b/"><FontAwesomeIcon icon={faLinkedin} className="fa-2x custom-color-hover"/></a>
            </div>
    );
}
export default SocialIcons;