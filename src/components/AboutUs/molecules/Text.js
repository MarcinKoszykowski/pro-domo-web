import React from 'react';
import styled from 'styled-components';
import { title, text } from 'data/aboutUs';
import Title from '../atoms/Title';
import Description from '../atoms/Description';

const Wrapper = styled.div`
  position: relative;
  margin-right: 6%;
  transition-property: margin;

  @media screen and (max-width: 550px) {
    margin: 0;
  }
`;

const Text = () => (
  <Wrapper>
    <Title>{title}</Title>
    <Description>{text}</Description>
  </Wrapper>
);

export default Text;
