import StencilSVG from './StencilSVG'; // Adjust the path based on your project structure
import AnimatedSVG from './AnimatedSVG';

const StencilAnimationDemo = () => {
  return (
    <div>
      <h1>Your Stencil</h1>
      <StencilSVG />

      <h1>Animated Drawing</h1>
      <AnimatedSVG />
    </div>
  );
};

export default StencilAnimationDemo;
