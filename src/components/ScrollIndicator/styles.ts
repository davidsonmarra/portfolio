import styled from 'styled-components';

export const Container = styled.section`
  position: absolute;
  bottom: 3rem;
  svg {
    transition: all 0.50s ease-in-out;
  }
  @media(max-height: 700px) {
    bottom: 1rem;
  }
  @media(max-height: 600px) {
    display: none;
  }
`;