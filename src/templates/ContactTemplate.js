import React, { useState, useEffect, createRef, useContext } from 'react';
import styled from 'styled-components';
import AppContext from 'context';
import Modal from 'components/Modal/Modal';
import Contact from 'components/Contact/Contact';

const Section = styled.section`
  position: relative;
  transition: margin 0.2s, width 0.2s;

  @media screen and (min-width: 1600px) {
    margin: 0 auto;
    width: 1600px;
  }
`;

const reference = createRef();

function ContactTemplate() {
  const [toggleModal, setToggleModal] = useState(false);
  const [office, setOffice] = useState(false);
  const [city, setCity] = useState('');
  const {
    contactIsVisibility,
    handleSetContactIsVisibility,
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

  const handleContactAnimation = () => addAnimation(reference, 1.4, handleSetContactIsVisibility);
  const addAnimationEffect = () => handleAddEventListener(handleContactAnimation);
  const removeAnimationEffect = () => handleRemoveEventListener(handleContactAnimation);
  const windowAnimationEffect = () => handleWindowSizeAnimation(handleContactAnimation);

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
      <Contact
        contactIsVisibility={contactIsVisibility}
        handleSectionButton={handleSectionButton}
        handleOfficeButton={handleOfficeButton}
      />
    </Section>
  );
}

export default ContactTemplate;
