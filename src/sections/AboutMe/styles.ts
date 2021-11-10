import styled from 'styled-components';

export const Container = styled.section`
  /* height: 100vh; */
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  max-width: 920px;
  margin: 0 auto;
  margin-bottom: 2rem;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 560px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 17.5rem;
  border-radius: .8rem;
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const TitleContainer = styled.div`
  width: 100%;
  font-size: 1.2rem;
  margin: 0 auto 1rem;
  @media (max-width: 560px) {
    margin: 1rem auto 0.5rem;
    padding: 0 .8rem;
  }
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.text};
  width: 100%;
`;

export const TitleDynamic = styled.span`
  font-family: 'JetBrains Mono', monospace;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  height: 100%;
  @media (max-width: 560px) {
    flex-direction: column;
  }
`;

export const Divider = styled.div`
  width: 1rem ;
  background: ${({ theme }) => `linear-gradient(140deg, ${theme.colors.secondary} 0%, ${theme.colors.primary} 60%)`};
  margin-right: .5rem;
  @media (max-width: 560px) {
    width: 100%;
    height: .1rem;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.text};
  padding: 0 .5rem;
  @media (max-width: 560px) {
    margin-top: .5rem;
    padding: 0 .8rem;
  }
`;