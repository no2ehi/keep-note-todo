import { useEffect, useState } from "react";


const useScreenMedia = () => {
  const [mediaQueries, setMediaQueries] = useState({
    sm: false,
    md: false,
    lg: false,
    xl: false,
  });

  useEffect(() => {
    const setNewMediaValues = (size) => {
      setMediaQueries((prevState) => {
        const prevStateCopy = { ...prevState };

        for (const key in prevStateCopy) {
          prevStateCopy[key] = false;
        }
        if (size) return { ...prevStateCopy, [size]: true };
        return { ...prevStateCopy };
      });
    };

    const checkMediaSize = () => {
      if (window.innerWidth >= 1280) {
        setNewMediaValues("xl");
      } else if (window.innerWidth >= 1024) {
        setNewMediaValues("lg");
      } else if (window.innerWidth >= 768) {
        setNewMediaValues("md");
      } else if (window.innerWidth >= 640) {
        setNewMediaValues("sm");
      } else if (window.innerWidth > 0) {
        setNewMediaValues();
      }
    };

    checkMediaSize();
    window.addEventListener("resize", checkMediaSize);
    return () => window.removeEventListener("resize", checkMediaSize);
  }, []);

  return mediaQueries;
};

export default useScreenMedia;
