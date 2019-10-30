import React from 'react';
import styled from 'styled-components';
import aboutUs from 'data/aboutUs';
import Title from '../atoms/Title';
import Description from '../atoms/Description';

const Wrapper = styled.div`
  position: relative;
  margin-right: 6%;
  transition: 0.2s margin;

  @media screen and (max-width: 550px) {
    margin: 0;
  }
`;

const Text = () => (
  <Wrapper>
    <Title>{aboutUs.title}</Title>
    <Description>{aboutUs.text}</Description>
  </Wrapper>
);

export default Text;
