import styled from 'styled-components';

export const Container = styled.div`
  max-width: 920px;
  margin: 0 auto;
  padding: 0 1rem;
  margin-bottom: 5rem;
`;

export const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 980px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
  }
`;