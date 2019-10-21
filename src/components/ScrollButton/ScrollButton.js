import React from 'react';
import arrowTop from 'assets/icons/caret-up.svg';
import Button from 'components/ScrollButton/atoms/Button';

function ScrollButton() {
  const handleScrollButton = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return <Button onClick={handleScrollButton} src={arrowTop} />;
}

export default ScrollButton;
