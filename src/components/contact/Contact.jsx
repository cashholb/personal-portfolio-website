import './contact.scss';

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
        <a className='social-button'href="https://github.com/cashholb">
          <img src="public/socialIcons/github-mark-white.svg" alt="github logo link" />
        </a>
        <a className='social-button email-link' href="mailto::cashtoncoleholbert@gmail.com">
          <img src="public/socialIcons/reshot-icon-email-arrow-up-YHUFD8SPL4.svg" alt="email icon" />
        </a>
        <a className='social-button' href="https://linkedin.com/in/cashton-holbert-04373225a">
            <img src="public/socialIcons/linkedin-svgrepo-com.svg" alt="linked in logo link" />
        </a>
      </div>
    </div>
  )
}

export default Contact;