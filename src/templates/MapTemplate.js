import React, { useState, useEffect, createRef, useContext } from 'react';
import styled, { css } from 'styled-components';
import Modal from 'components/organisms/Modal';
import MapText from 'components/organisms/MapText';
import MapImage from 'components/molecules/Map/MapImage';
import animations from 'styled/animations';
import AppContext from 'context';

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

  ${({ elementVisibility }) =>
    elementVisibility &&
    css`
      visibility: visible;
      animation: ${cityTextAnimation} 1s ease-out 0.5s backwards;
    `}
`;

const reference = createRef();

function MapTemplate() {
  const [toggleModal, setToggleModal] = useState(false);
  const [office, setOffice] = useState(false);
  const [city, setCity] = useState('');
  const {
    mapIsVisibility,
    handleSetMapIsVisibility,
    addAnimation,
    handleRemoveEventListener,
    handleAddEventListener,
    handleWindowSizeAnimation,
  } = useContext(AppContext);

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

  const handleMapAnimation = () => addAnimation(reference, 1.5, handleSetMapIsVisibility);
  const addAnimationEffect = () => handleAddEventListener(handleMapAnimation);
  const removeAnimationEffect = () => handleRemoveEventListener(handleMapAnimation);
  const windowAnimationEffect = () => handleWindowSizeAnimation(handleMapAnimation);

  useEffect(() => {
    addAnimationEffect();
    windowAnimationEffect();

    return () => {
      removeAnimationEffect();
    };
  });

  return (
    <Section ref={reference}>
      {toggleModal && <Modal city={city} office={office} modalButtonOnClick={handleModalButton} />}
      <Wrapper>
        <TextWrapper elementVisibility={mapIsVisibility}>
          <MapText main cityButtonOnClick={handleSectionButton} />
          <MapText cityButtonOnClick={handleOfficeButton} />
        </TextWrapper>
        <MapImage />
      </Wrapper>
    </Section>
  );
}

export default MapTemplate;
