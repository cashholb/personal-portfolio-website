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
          {`
            Hello! My real name is Cashton, but I often go by Cash.
            I am passionate about developing technologies for the web and beyond. 
            In my free time you can catch me at the climbing gym or playing board games with friends. 
          `}
        </p>
        <p>
          {`
            As a recent Computer Science graduate from UCSC, I have dived deep into 
            Full Stack Web Development and haven't looked back. Using the skills I 
            gained from University and The Odin Project, I have learned some of the best technologies for 
            modern Full Stack Web development. Here's a small snippet of that below.
          `}
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