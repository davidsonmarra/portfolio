import styled from 'styled-components';

export const Container = styled.div`
  max-width: 920px;
  padding: 0 1rem;
  margin: 0 auto;
  margin-bottom: 5rem;
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
  @media(max-width: 770px) {
    flex-direction: column;
    align-items: center;
  }
`;