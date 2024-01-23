import './about.scss'
import TechCard from './techCard/TechCard';

import reactLogo from '../../assets/techIcons/react.svg';
import expressLogo from '../../assets/techIcons/expressjs-icon.svg';
import javaScriptLogo from '../../assets/techIcons/javascript.svg';
import nodeJSLogo from '../../assets/techIcons/node.svg';
import sassLogo from '../../assets/techIcons/sass.svg';
import mongoDBLogo from '../../assets/techIcons/MongoDB_Spring-Green.svg';
import webpackLogo from '../../assets/techIcons/webpack.svg';
import gitLogo from '../../assets/techIcons/git.svg';

function About() {

  const icons = [
    {
      filePath: reactLogo,
      description: 'React'
    },
    {
      filePath: expressLogo,
      description: 'express.js'
    },
    {
      filePath: javaScriptLogo,
      description: 'JavaScript'
    },
    {
      filePath: nodeJSLogo,
      description: 'NodeJS'
    },
    {
      filePath: sassLogo,
      description: 'SASS'
    },
    {
      filePath: mongoDBLogo,
      description: 'MongoDB'
    },
    {
      filePath: webpackLogo,
      description: 'Webpack'
    },
    {
      filePath: gitLogo,
      description: 'Git'
    },
  ];

  return (
    <div className="about">
      <h1>About Me</h1>
      <hr />
      <div className="paragraph-section">
        <p>
            Hello! I'm <span className="name-span">Cashton</span>, although I often go by Cash. I'm passionate about creating innovative web technologies and exploring the space 
            of <span className='important-text-span'>Full-Stack Web Development</span>. Currently based in Southern California, I'm open to embracing new opportunities wherever they may lead.
            Outside the world of coding, you'll often find me scaling walls at the climbing gym or immersed in board games with my friends.
        </p>
        <p>
            Having recently graduated from <span className='important-text-span'>UCSC with a degree in Computer Science</span>, I immersed myself in the world of 
            Full Stack Web Development. Armed with the knowledge acquired from both my university experience and The Odin Project, I've honed my skills with some of the 
            most cutting-edge technologies in the field. <span className='important-text-span'>Take a peek at what I've been working with below.</span>
        </p>
      </div>
      <div className="tech-card-list">
        {icons.map((icon) => 
          <TechCard key={icon.description} svgFilePath={icon.filePath} description={icon.description}/>
        )}
      </div>
    </div>
  )
}

export default About;