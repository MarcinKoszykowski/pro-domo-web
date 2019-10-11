import React, { useState, useEffect, createRef, useCallback } from 'react';
import styled, { css } from 'styled-components';
import Modal from 'components/organisms/Modal';
import MapText from 'components/organisms/MapText';
import MapImage from 'components/molecules/Map/MapImage';
import animations from 'styled/animations';

const { cityTextAnimation } = animations;
const Section = styled.section`
  position: relative;
  transition: margin 0.2s, width 0.2s;

  @media screen and (min-width: 1600px) {
    margin: 0 auto;
    width: 1600px;
  }
`;

const Wrapper = styled.div`
  align-items: center;
  padding: 10px 40px 20px 80px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  transition: margin 0.2s, width 0.2s, padding 0.2s;

  @media screen and (max-width: 1100px) {
    padding: 10px 25px 20px 70px;
  }
  @media screen and (max-width: 850px) {
    padding: 0 15px 15px 60px;
  }
  @media screen and (max-width: 700px) {
    padding: 0 15px 15px 50px;
  }
  @media screen and (max-width: 500px) {
    padding: 0 10px 10px 40px;
  }
`;

const TextWrapper = styled.div`
  width: 100%;
  visibility: hidden;

  ${({ isVisibility }) =>
    isVisibility &&
    css`
      visibility: visible;
      animation: ${cityTextAnimation} 1s ease-out 0.5s backwards;
    `}
`;

const reference = createRef();

function MapTemplate() {
  const [toggleModal, setToggleModal] = useState(false);
  const [animation, setAnimation] = useState(true);
  const [office, setOffice] = useState(false);
  const [isVisibility, setIsVisibility] = useState(false);
  const [city, setCity] = useState('');

  const handleModalButton = () => {
    setToggleModal(false);
  };

  const handleOfficeButton = value => {
    setToggleModal(true);
    setOffice(true);
    setCity(value);
  };

  const handleSectionButton = value => {
    setToggleModal(true);
    setOffice(false);
    setCity(value);
  };

  const elementInViewport = (element, number) => {
    const top = element.offsetTop;
    return top * number < window.pageYOffset + window.innerHeight;
  };

  const addAnimation = () => {
    const section = reference.current;

    if (elementInViewport(section, 1.3)) {
      setIsVisibility(true);
    }
  };

  const handleAddEventListener = () => {
    if (animation) {
      window.addEventListener('scroll', addAnimation);
      window.addEventListener('resize', addAnimation);
      window.addEventListener('load', addAnimation);
    }
  };

  const handleRemoveEventListener = () => {
    setAnimation(false);
    window.removeEventListener('scroll', addAnimation);
    window.removeEventListener('resize', addAnimation);
    window.removeEventListener('load', addAnimation);
  };

  const handleWindowSizeAnimation = () => {
    if (window.innerHeight > window.outerHeight) {
      addAnimation();
    }
  };

  const addAnimationEffect = useCallback(handleAddEventListener, [animation]);
  const removeAnimationEffect = useCallback(handleRemoveEventListener, [animation]);
  const windowAnimationEffect = useCallback(handleWindowSizeAnimation);

  useEffect(() => {
    addAnimationEffect();
    windowAnimationEffect();

    return () => {
      removeAnimationEffect();
    };
  }, [addAnimationEffect, removeAnimationEffect, windowAnimationEffect]);

  return (
    <Section ref={reference}>
      {toggleModal && <Modal city={city} office={office} modalButtonOnClick={handleModalButton} />}
      <Wrapper>
        <TextWrapper isVisibility={isVisibility}>
          <MapText main cityButtonOnClick={handleSectionButton} />
          <MapText cityButtonOnClick={handleOfficeButton} />
        </TextWrapper>
        <MapImage isVisibility={isVisibility} />
      </Wrapper>
    </Section>
  );
}

export default MapTemplate;
