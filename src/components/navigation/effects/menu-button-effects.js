import styled from 'styled-components';

/* Drop shadow and animation effects for the main nav buttons on the page */
const MenuButtonEffects = styled.div`
  filter: drop-shadow(0.15rem 0.15rem 0.1rem rgba(0, 0, 0, 0.17));
  :hover {
    cursor: pointer;
    transform: translate(2px, 0) scale(0.98) rotate(5deg);
    filter: drop-shadow(0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.2));
  }
  
  :active {
    cursor: pointer;
    transform: translate(2px, 0) scale(1.1) rotate(5deg);
    filter: drop-shadow(0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.2));
  }

  @media all and (max-width: 1100px) and (min-width: 760px) {
    width: 40px;
    filter: drop-shadow(0.14rem 0.14rem 0.1rem rgba(0, 0, 0, 0.1));
  }

  @media all and (max-width: 759px) {
    width: 38px;
    filter: drop-shadow(0.14rem 0.14rem 0.1rem rgba(0, 0, 0, 0.1));
  }
`;

export {MenuButtonEffects};
