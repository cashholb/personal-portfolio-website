import './contact.scss';

import githubLogo from '../../assets/socialIcons/github-mark-white.svg';
import emailLogo from '../../assets/socialIcons/reshot-icon-email-arrow-up-YHUFD8SPL4.svg';
import linkedinLogo from "../../assets/socialIcons/linkedin-svgrepo-com.svg";

function Contact() {
  return (
    <div className="contact">
      <h1>{`Let's get in touch`}</h1>
      <hr />
      <p>
        {`
          I'm currently looking for new opportunities so why don't you send me an email, 
          message me on LinkedIn, or add me on GitHub. Whether it 
          be for Business or just to say hi, my inboxes are always open.
        `}
      </p>
      
      <div className='contact-social-links'>
        <a className='social-button email-link' href="mailto::cashtoncoleholbert@gmail.com">
          <img src={emailLogo} alt="email icon" />
        </a>
        <a className='social-button' href="https://linkedin.com/in/cashton-holbert-04373225a">
            <img src={linkedinLogo} alt="linked in logo link" />
        </a>
        <a className='social-button'href="https://github.com/cashholb">
          <img src={githubLogo} alt="github logo link" />
        </a>
      </div>
    </div>
  )
}

export default Contact;