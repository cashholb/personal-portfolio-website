import './about.scss'
import TechCard from './techCard/TechCard';

function About() {

  const icons = [
    {
      filePath: '/techIcons/react.svg',
      description: 'React'
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
      filePath: '/techIcons/git.svg',
      description: 'Git'
    },
  ];

  return (
    <div className="about">
      <h1>About Me</h1>
      <div className="paragraph-section">
        <p>
          {`
            Hello! My real name is Cashton, but I often go by just Cash.
            I am passionate about developing technologies for the web and beyond. 
            In my free time you can catch me at the climbing gym or playing board games with friends. 
          `}
        </p>
        <p>
          {`
            As a recent Computer Science graduate from UCSC, I have changed my career trajectory to dive deep into 
            Full Stack Web Development and haven't looked back since. Using the skills I 
            gained from University and The Odin Project, I have been using some of the best technology for 
            modern Full Stack Web development. Here's a snippet of that below.
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