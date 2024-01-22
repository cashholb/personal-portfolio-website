import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

import useMediaQuery from '../../../hooks/useMediaQuery';

const StencilSVG = ({svgPathParam = '/heroImage/svgPath.txt'}) => {
  const [svgPath, setSvgPath] = useState('');

  const isMobile = useMediaQuery('(max-width: 768px)');


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
  }, [isMobile, svgPathParam]);
  

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width={isMobile ? `222` : `444`} height={isMobile ? `300` : `600`}>
        <path d={svgPath} fill="none" stroke="black" strokeWidth="2" />
      </svg>
    </>
  );
};

StencilSVG.propTypes = {
  svgPathParam: PropTypes.string, // Add prop type validation for svgPathParam
};

export default StencilSVG;
