import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: 1.5rem;
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Link = styled.a`
  & + a {
    margin-top: 2rem
  }
  svg {
    transition: all .3s;
    :hover {
      cursor: pointer;
      filter: brightness(0.8);
    }
  }
`;