import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(120, 120);
    };

    // Scroll to top when the location changes
    scrollToTop();
  }, [location]);

  return null;
};

export default ScrollToTop;
