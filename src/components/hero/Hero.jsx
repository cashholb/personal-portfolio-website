import './hero.scss';
import HeroImage from './heroImage/HeroImage';
import HeroText from './heroText/HeroText';

function Hero() {

  return (
    <div className="hero">
      <HeroImage></HeroImage>
      <HeroText></HeroText>
    </div>
  );
}

export default Hero;