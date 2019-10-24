import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import phone from 'data/phone';
import Text from '../atoms/Text';
import Phone from '../atoms/Phone';

const Wrapper = styled.div`
  text-align: center;
`;

const Section = ({ city }) => (
  <Wrapper>
    <Text>{phone[city].city}</Text>
    <Phone href={phone[city].href}>{phone[city].phone}</Phone>
    {phone[city].phone_2 && <Phone href={phone[city].href_2}>{phone[city].phone_2}</Phone>}
  </Wrapper>
);

Section.propTypes = {
  city: PropTypes.string.isRequired,
};

export default Section;
