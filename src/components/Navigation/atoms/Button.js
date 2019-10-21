import styled, { css } from 'styled-components';
import IconFAQ from 'assets/icons/question-circle.svg';
import IconForm from 'assets/icons/clipboard-list.svg';
import IconCareer from 'assets/icons/briefcase.svg';
import animations from 'styled/animations';
import { grey } from 'styled/colors';

const { menuIconAnimation } = animations;

const Button = styled.button`
  cursor: pointer;
  margin: 0 10px;
  width: 40px;
  height: 40px;
  background-color: ${grey};
  animation: ${menuIconAnimation} 1.5s ease 0.5s backwards;
  transition: margin 0.2s, width 0.2s, height 0.2s, display 0.5s;

  &:hover {
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0);
  }

  @media screen and (min-width: 840px) {
    display: none;
  }
  @media screen and (max-width: 380px) {
    margin: 0 8px;
    width: 35px;
    height: 35px;
  }

  ${({ faq }) =>
    faq &&
    css`
      background: url(${IconFAQ}) no-repeat center;
    `}

  ${({ contact }) =>
    contact &&
    css`
      background: url(${IconForm}) no-repeat center;
    `}

  ${({ career }) =>
    career &&
    css`
      background: url(${IconCareer}) no-repeat center;
    `}
`;

export default Button;
