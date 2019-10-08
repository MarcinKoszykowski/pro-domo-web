import styled from 'styled-components';
import colors from '../../styled/colors';

const WidgetsText = styled.p`
  color: ${colors.greyLight};
  text-align: center;
  font-size: 0.9rem;
  margin: 8px 0;
  padding: 3px 0;
  transition: font-size 0.2s, margin 0.2s;

  @media screen and (min-width: 1800px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 900px) {
    font-size: 0.85rem;
  }
  @media screen and (max-width: 700px) {
    font-size: 0.8rem;
    margin: 3px 0;
  }
`;

export default WidgetsText;
