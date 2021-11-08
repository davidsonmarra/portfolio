import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: 1.5rem;
  @media (max-width: 600px) {
    bottom: 3rem;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const Link = styled.a`
  & + a {
    margin-top: 2rem;
    @media (max-width: 600px) {
      margin-top: 0;
      margin-left: 2rem;
    }
  }
  svg {
    transition: all .3s;
    :hover {
      cursor: pointer;
      filter: brightness(0.8);
    }
  }
`;