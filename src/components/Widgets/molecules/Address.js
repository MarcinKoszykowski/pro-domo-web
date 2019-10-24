import React from 'react';
import styled from 'styled-components';
import { address } from 'data/widgets';
import Text from '../atoms/Text';

const Wrapper = styled.div`
  margin: 20px auto;
  transition: margin 0.2s;

  @media screen and (max-width: 700px) {
    margin: 10px auto;
  }
`;

const { title, address1, address2 } = address;

const Address = () => (
  <Wrapper>
    <Text>{title}</Text>
    <Text>{address1}</Text>
    <Text>{address2}</Text>
  </Wrapper>
);

export default Address;
