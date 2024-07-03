import { useEffect } from 'react';

export function HideAddressBar() {
  useEffect(() => {
    const hideAddressBar = () => {
      if (window.scrollY === 0) {
        window.scrollTo(0, 1);
      }
    };

    window.addEventListener('load', hideAddressBar);
    window.addEventListener('orientationchange', hideAddressBar);

    return () => {
      window.removeEventListener('load', hideAddressBar);
      window.removeEventListener('orientationchange', hideAddressBar);
    };
  }, []);
}
