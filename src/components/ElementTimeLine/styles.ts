import styled, { css } from 'styled-components';
import { DataProps } from '../TimeLine';

interface ContainerProps {
  item: DataProps;
}

interface LineProps {
  max: number;
  index: number;
}

export const Container = styled.li<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: ${({ item }) => item.id % 2 === 0 ? 
  'flex-end' : 'flex-start'};
  position: relative;
  padding: 1.5rem 0;
`;

export const Title = styled.h4<ContainerProps>`
  color: ${({ theme }) => theme.colors.title};
  text-align: ${({ item }) => item.id % 2 === 0 ? 
  'end' : 'start'};
  font-size: 1.15rem;
  @media (max-width: 570px) {
    width: 45%;
    display: flex;
    justify-content: flex-end;
  }
`;

export const Local = styled.span`
  color: ${({ theme }) => theme.colors.titleSecondary};
  margin-bottom: .5rem;
`;

export const Date = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.dataTimeText};
  & svg {
    margin-right: .25rem
  }
`;

export const DateText = styled.span`
  transform: translateY(4%);
`;

export const Ball = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  border-radius: 50%;
  z-index: 1;
`;

export const Line = styled.div<LineProps>`
  width: 0.25rem;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  ${({ index }) => index === 1 && css`
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    margin-top: .5rem;
  `};
  ${({index, max}) => index === max-1 && css`
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    margin-bottom: .5rem;
  `};
`;