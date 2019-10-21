import React from 'react';
import styled from 'styled-components';
import aboutUs from 'data/aboutUs';
import Title from 'components/AboutUs/atoms/Title';
import Description from 'components/AboutUs/atoms/Description';

const Wrapper = styled.div`
  position: relative;
  margin-right: 6%;
  transition: 0.2s margin;

  @media screen and (max-width: 550px) {
    margin: 0;
  }
`;

const { title, text } = aboutUs;

const Text = () => (
  <Wrapper>
    <Title>{title}</Title>
    <Description>{text}</Description>
  </Wrapper>
);

export default Text;
