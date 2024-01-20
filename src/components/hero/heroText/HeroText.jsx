import './heroText.scss';
import ScrollIndicator from './scrollIndicator/ScrollIndicator';

function HeroText() {

  return(
    <div className="hero-right">
      <div className="hero-text">
        <h1>Hi, I&apos;m Cashton Holbert</h1>
        
        <p>Aspiring Full Stack Web Developer</p>
      
      </div>
      <ScrollIndicator></ScrollIndicator>
    </div>
  )
}

export default HeroText;