import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useLockBodyScroll() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.body.clientWidth;

    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = `0px`;
    };
  }, []);
}
export default useLockBodyScroll;