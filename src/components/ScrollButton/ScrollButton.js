import React, { useState, useCallback, useEffect } from 'react';
import arrowTop from 'assets/icons/caret-up.svg';
import Button from './atoms/Button';

const ScrollButton = () => {
  const [isVisibility, setIsVisibility] = useState(false);

  const toggleScrollButton = () => {
    setIsVisibility(window.scrollY > 300);
  };

  const handleEventListener = () => {
    window.addEventListener('scroll', toggleScrollButton);
    window.addEventListener('load', toggleScrollButton);
  };

  const scrollButtonEffect = useCallback(handleEventListener, [isVisibility]);

  useEffect(() => scrollButtonEffect());

  const handleScrollButton = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return isVisibility && <Button onClick={handleScrollButton} src={arrowTop} />;
};

export default ScrollButton;
