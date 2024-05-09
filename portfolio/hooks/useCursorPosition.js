import { useState, useEffect } from "react";

const useCursorPosition = () => {
  const [position, setPosition] = useState({
    clientX: 0,
    clientY: 0,
  });

  const updatePosition = event => {
    const {  clientX, clientY } = event;

    setPosition({
      x:clientX,
      y:clientY,
    
    });
  };

// Because of a WebKit-Issue which renders (even SVG) cursors blurry on Retina-Displays I decided to go for a solution which renders the cursor within a custom <div>.

useEffect(() => {
  document.addEventListener("mousemove", updatePosition, false);
  document.addEventListener("mouseenter", updatePosition, false);
  return () => {
    document.removeEventListener("mousemove", updatePosition);
    document.removeEventListener("mouseenter", updatePosition);
  };
  
}, []);

return position;
};

export default useCursorPosition;
