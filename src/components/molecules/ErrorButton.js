import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from 'components/atoms/Button';
import routes from 'data/routes';
import error from 'data/error';
import colors from 'styled/colors';

const StyledButton = styled(Button)`
  font-size: 1.2rem;
  margin: 50px auto 0;
  padding: 10px 16px;
  transition: padding 0.2s, margin 0.2s, font 0.2s, color 0.2s, transform 0.2s, border 0.2s;

  @media screen and (min-width: 1800px) {
    margin-top: 60px;
    font-size: 1.3rem;
    padding: 12px 18px;
  }
  @media screen and (max-width: 840px) {
    margin-top: 40px;
    font-size: 1.1rem;
    padding: 8px 14px;
  }
  @media screen and (max-width: 600px) {
    margin-top: 30px;
    font-size: 0.9rem;
    letter-spacing: 0.5px;
    padding: 6px 12px;
    border-width: 1.5px;
  }
  @media screen and (max-width: 500px) {
    margin-top: 20px;
  }
`;

const ErrorButton = () => (
  <Link to={routes.main}>
    <StyledButton color={colors.orange} hoverColor={colors.blue}>
      {error.button}
    </StyledButton>
  </Link>
);

export default ErrorButton;
