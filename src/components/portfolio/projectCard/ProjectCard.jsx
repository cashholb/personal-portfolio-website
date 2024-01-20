import './projectCard.scss';
import PropTypes from 'prop-types';

function ProjectCard({ title, img, alt, description, githubLink, demoLink }) {
  return (
    <div className="project-card">
      <div className="project-card-img">
        <img src={img} alt={alt} />
      </div>
      <div className="project-card-details">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="project-buttons">
          <button><a href={githubLink}>Github Repo</a></button>
          <button><a href={demoLink}>Live Demo</a></button>
        </div>
      </div>
    </div>
  )
}

ProjectCard.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  alt: PropTypes.string,
  description: PropTypes.string,
  githubLink: PropTypes.string,
  demoLink: PropTypes.string,
}

export default ProjectCard;