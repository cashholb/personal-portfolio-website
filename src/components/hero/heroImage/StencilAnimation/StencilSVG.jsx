import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

const StencilSVG = ({svgPathParam = '/src/components/navbar/StencilAnimation/svgPath.txt'}) => {
  const [svgPath, setSvgPath] = useState('');


  // Fetch SVG path from the text file
  useEffect(() => {
    const fetchSvgPath = async () => {
      try {
        const response = await fetch(svgPathParam);
        const pathData = await response.text();
        setSvgPath(pathData);
      } catch (error) {
        console.error('Error fetching SVG path:', error);
      }
    };
    fetchSvgPath();
  }, []);
  

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="444" height="600">
      <path d={svgPath} fill="none" stroke="black" strokeWidth="2" />
    </svg>
  );
};

StencilSVG.propTypes = {
  svgPathParam: PropTypes.string, // Add prop type validation for svgPathParam
};

export default StencilSVG;
