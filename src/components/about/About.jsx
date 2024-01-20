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
      <p>
        {`
          Hello! My name is Cashton and I enjoy developing technologies for the web and beyond. 
          In my free time you can catch me at the climbing gym or playing board games with friends. 
        `}
      </p>
      <p>
        {`
          As a recent graduate from UCSC, I have changed my career trajectory to dive deep into Full Stack Web Development 
          and haven't looked back since. Using the skills and knowledge I gained from University and The Odin Project, I have 
          been working on learning the best technology for modern Full Stack Web development. Here's some of tech 
          below.
        `}
      </p>
      <div className="tech-card-list">
        {icons.map((icon) => 
          <TechCard key={icon.description} svgFilePath={icon.filePath} description={icon.description}/>
        )}
      </div>
    </div>
  )
}

export default About;