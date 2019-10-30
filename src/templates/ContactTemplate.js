import React, { useState, useEffect, useRef, useContext } from 'react';
import styled from 'styled-components';
import AppContext from 'context';
import Modal from 'components/Modal/Modal';
import Contact from 'components/Contact/Contact';
import { addAnimationEventListener, removeAnimationEventListener } from 'helpers/functions';
import { addAnimation } from '../helpers/functions';

const Section = styled.section`
  position: relative;
  transition: margin 0.2s, width 0.2s;

  @media screen and (min-width: 1600px) {
    margin: 0 auto;
    width: 1600px;
  }
`;

const ContactTemplate = () => {
  const reference = useRef(null);
  const [toggleModal, setToggleModal] = useState(false);
  const [office, setOffice] = useState(false);
  const [city, setCity] = useState('');
  const {
    contactIsVisibility,
    handleSetContactIsVisibility,
    handleWindowSizeAnimation,
  } = useContext(AppContext);

  const modalButtonOnClick = () => {
    setToggleModal(false);
  };

  const officeButtonOnClick = value => {
    setToggleModal(true);
    setOffice(true);
    setCity(value);
  };

  const sectionButtonOnClick = value => {
    setToggleModal(true);
    setOffice(false);
    setCity(value);
  };

  const handleContactAnimation = () => addAnimation(reference, 1.4, handleSetContactIsVisibility);
  const addAnimationEffect = () => addAnimationEventListener(handleContactAnimation);
  const removeAnimationEffect = () => removeAnimationEventListener(handleContactAnimation);
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
      <Modal
        toggleModal={toggleModal}
        city={city}
        office={office}
        modalButtonOnClick={modalButtonOnClick}
      />
      <Contact
        contactIsVisibility={contactIsVisibility}
        sectionButtonOnClick={sectionButtonOnClick}
        officeButtonOnClick={officeButtonOnClick}
      />
    </Section>
  );
};

export default ContactTemplate;
