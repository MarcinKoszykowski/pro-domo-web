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

const Address = () => (
  <Wrapper>
    <Text>{address.title}</Text>
    <Text>{address.address1}</Text>
    <Text>{address.address2}</Text>
  </Wrapper>
);

export default Address;
