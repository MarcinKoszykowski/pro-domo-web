import React, { useState, useEffect, createRef } from 'react';
import styled from 'styled-components';
import colors from 'styled/colors';
import Loan from 'components/molecules/Loan';

const Section = styled.section`
  text-align: center;
  background-color: ${colors.colorWithOpacity(colors.orange, 0.95)};
`;

const reference = createRef();

function LoanTemplate() {
  const [isVisibility, setVisibility] = useState(false);
  const [animation, setAnimation] = useState(true);

  const elementInViewport = (element, number) => {
    const top = element.offsetTop;
    return top * number < window.pageYOffset + window.innerHeight;
  };

  const addAnimation = () => {
    const section = reference.current;

    if (elementInViewport(section, 2)) {
      setVisibility(true);
    }
  };

  useEffect(() => {
    if (animation) {
      window.addEventListener('scroll', addAnimation);
      window.addEventListener('resize', addAnimation);
      window.addEventListener('load', addAnimation);
    }

    if (window.innerHeight > window.outerHeight) {
      addAnimation();
    }

    return () => {
      setAnimation(false);
      window.removeEventListener('scroll', addAnimation);
      window.removeEventListener('resize', addAnimation);
      window.removeEventListener('load', addAnimation);
    };
  });

  return (
    <Section ref={reference}>
      <Loan visible={isVisibility} />
    </Section>
  );
}

export default LoanTemplate;
