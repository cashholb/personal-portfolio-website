import './portfolio.scss'
import ProjectCard from './projectCard/ProjectCard'

import portfolioImage from '../../assets/portfolioImages/portfolio-site.png';
import threeDayForecastImage from '../../assets/portfolioImages/weather-app.png';
import ticTacToeImage from '../../assets/portfolioImages/tic-tac-toe.png';

function Portfolio() {

  const portfolioList = [
    {
      projectName: 'Portfolio Site',
      img: portfolioImage,
      imgAltText: 'Portfolio Site Screenshot',
      description: `My personal website and portfolio. Built with React, SASS, and Framer Motion.`,
      githubRepoLink: 'https://github.com/cashholb/personal-portfolio-website',
      demoLink: ''
    },
    {
      projectName: 'Three Day Forecast',
      img: threeDayForecastImage,
      imgAltText: 'Three Day Forecast Screenshot',
      description: `A weather application utilizing weatherapi.com. Built with Webpack, JS, HTML, and CSS.`,
      githubRepoLink: 'https://github.com/cashholb/Weather-App',
      demoLink: 'https://cashholb.github.io/Weather-App/'
    },
    {
      projectName: 'Tic-Tac-Toe',
      img: ticTacToeImage,
      imgAltText: 'tic tac toe application screenshot',
      description: `Play the classic game against an unbeatable adversary. Built with JavaScript, HTML, CSS, and an unbeatable computer adversary powered by the minimax algorithm.`,
      githubRepoLink: 'https://github.com/cashholb/tic-tac-toe?tab=readme-ov-file',
      demoLink: 'https://cashholb.github.io/tic-tac-toe/',
    }
  ]

  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <hr />
      {portfolioList.map((project) =>
        <ProjectCard 
          key={project.projectName}
          title={project.projectName} 
          img={project.img} 
          alt={project.imgAltText} 
          description={project.description} 
          githubLink={project.githubRepoLink}
          demoLink={project.demoLink}
        />
      )}
    </div>
  )
}


export default Portfolio;