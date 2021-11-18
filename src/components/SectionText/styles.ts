import styled from 'styled-components';

interface TitleProps {
  subTitle: string;
}

export const Container = styled.div`

`;

export const Title = styled.h2<TitleProps>`
  color: ${({ theme }) => theme.colors.title};
  position: relative;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 60px;
  padding: .5rem 5rem 1rem;
  font-weight: 500;
  transition: all 0.50s ease-in-out;
  ::before {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 50%;
    width: 12rem;
    height: 2px;
    background: ${({ theme }) => theme.colors.title};
    transform: translateX(-50%);
    transition: all 0.50s ease-in-out;
    
  }
  ::after {
    content: '${({ subTitle }) => {return subTitle}}';
    position: absolute;
    bottom: -15px;
    left: 50%;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.primary};
    padding: 5px;
    background: ${({ theme }) => theme.colors.background};
    transform: translateX(-50%);
    transition: all 0.50s ease-in-out;
  }
`;