import styled from 'styled-components';

interface ButtonContainerProps {
  themeMode: boolean;
}

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 1.5rem 0rem 3.5rem;
  @media(max-width: 865px) {
    flex-direction: column;
    align-items: center;
  }
  background: ${({ theme }) => theme.colors.inputBackground};
`;

export const BannerContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Banner = styled.img`
  border-radius: 1rem;
  height: 22rem;
  width: 25rem;
  object-fit: cover;
  object-position: center;
  @media(max-width: 865px) {
    height: 18rem;
    width: 20rem;
    margin-bottom: 1.5rem;
  }
`;

export const Logo = styled.img`
  margin-bottom: 1.5rem;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  justify-content: space-between;
  align-items: center;
  @media(max-width: 865px) {
    width: 80%;
  }
`;

export const Title = styled.h3`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.title};
  @media(max-width: 865px) {
    margin-bottom: 1.5rem;
  }
`;

export const TextContainer = styled.div`
  padding-left: 1rem;
  display: flex;
`;

export const Divider = styled.div`
  width: 1rem;
  height: 100%;
  background: ${({ theme }) => `linear-gradient(140deg, ${theme.colors.secondary} 0%, ${theme.colors.primary} 60%)`};
  margin-right: .5rem;
  @media (max-width: 865px) {
    display: none;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.titleSecondary};
  & + p {
    margin-top: 1rem;
  }
`;

export const ButtonContainer = styled.a<ButtonContainerProps>`
  text-decoration: none;
  transition: all .5s ease-in-out;
  &:hover {
    filter: ${({ theme, themeMode }) => themeMode ? theme.colors.filterIcon : theme.colors.filterText};
  }
`;

export const Button = styled.button`
  margin-top: 1rem;
  padding: 1.25rem .5rem 1.25rem 1rem;
  font-size: 1rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary};
  transition: all .5s ease-in-out;
  border: none;
  border-radius: .25rem;
`;

export const ButtonText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .5s ease-in-out;
  & svg {
    transition: all .5s ease-in-out;
    fill: ${({ theme }) => theme.colors.background};
  }
  color: ${({ theme }) => theme.colors.background};
`;