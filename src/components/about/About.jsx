import './about.scss'
import TechCard from './techCard/TechCard';

function About() {

  const icons = [
    {
      filePath: '/techIcons/react.svg',
      description: 'React'
    },
    {
      filePath: '/techIcons/expressjs-icon.svg',
      description: 'express.js'
    },
    {
      filePath: '/techIcons/javascript.svg',
      description: 'JavaScript'
    },
    {
      filePath: '/techIcons/node.svg',
      description: 'NodeJS'
    },
    {
      filePath: '/techIcons/sass.svg',
      description: 'SASS'
    },
    {
      filePath: '/techIcons/MongoDB_Spring-Green.svg',
      description: 'MongoDB'
    },
    {
      filePath: '/techIcons/webpack.svg',
      description: 'Webpack'
    },
    {
      filePath: '/techIcons/git.svg',
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