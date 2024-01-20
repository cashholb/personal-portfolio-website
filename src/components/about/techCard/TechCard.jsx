import './techCard.scss'
import PropTypes from 'prop-types';

function TechCard({ svgFilePath, description}) {
  return (
    <div className="tech-card">
      <img src={svgFilePath} alt={`${description} icon`} />
      <p className='tech-card-description'>
        {description}
      </p>
    </div>
  )
}

TechCard.propTypes = {
  svgFilePath: PropTypes.string,
  description: PropTypes.string,
}

export default TechCard;