import { useState, useEffect } from "react";

const useViewport = () => {
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return { width, height };
};

export default useViewport;
