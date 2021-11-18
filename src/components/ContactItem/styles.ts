import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  align-items: center;
  & + li {
    margin-top: 3rem;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: .25rem;
`;

export const Info = styled.p`
  color: ${({ theme }) => theme.colors.titleSecondary};
  font-size: .9rem;
`;