import styled, { css } from 'styled-components';

const List = styled.li`
  font-weight: 700;
  list-style: decimal;
  margin-bottom: 10px;
  transition-property: font;

  ${({ roman }) =>
    roman &&
    css`
      list-style: upper-roman;
    `}

  ${({ light }) =>
    light &&
    css`
      font-weight: 400;
    `}

  ${({ sub }) =>
    sub &&
    css`
      font-weight: 400;
      list-style: square;
      margin-bottom: 5px;
      margin-left: 30px;

      @media screen and (max-width: 1000px) {
        margin-left: 25px;
      }
      @media screen and (max-width: 700px) {
        margin-left: 20px;
      }
      @media screen and (max-width: 500px) {
        margin-left: 15px;
      }
    `}

@media screen and (max-width: 1000px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 700px) {
    font-size: 0.85rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 0.75rem;
  }
`;

export default List;
