import { lazy, Suspense } from 'react';
import './hero.scss';

import HeroText from './heroText/HeroText';

const LazyHeroImage = lazy(() => import('./heroImage/HeroImage'));

function Hero() {
  return (
    <div className="hero">
      <Suspense fallback={<div>Loading...</div>}>
        <LazyHeroImage />
      </Suspense>
      <HeroText />
    </div>
  );
}

export default Hero;


