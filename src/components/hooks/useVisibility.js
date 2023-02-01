import { useEffect, useState } from "react";

const useVisibility = (elements, fnClose) => {
  const [elementIsVisible, setElementIsVisible] = useState(false);

  useEffect(() => {
    const checkClick = (e) => {
      if (!elements) return;

      const clickedOutsideElement = elements.every((element) => {
        if (!element) return false;
        if (
          e.target !== element &&
          !element.contains(e.target)
        ) {
          return true;
        }
        return false;
      });

      if (clickedOutsideElement) {
        setElementIsVisible(false);
        if (fnClose) fnClose();
      }
    };

    document.addEventListener("click", checkClick);
    return () => {
      document.removeEventListener("click", checkClick);
    };
  }, [elements, fnClose]);

  const closeElement = () => {
    setElementIsVisible(false);
  };

  const showElement = () => {
    setElementIsVisible(true);
  };

  return { elementIsVisible, closeElement, showElement };
};

export default useVisibility;
