import styled from 'styled-components';
import Lottie from 'react-lottie';

interface ContainerProps {
  lastItem: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: ${({ theme }) => theme.colors.skillBackground};
  transition: all .5s;
  padding: 2rem 4rem 1rem;
  border-radius: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  transition: all .5s ease-in-out;
  position: relative;
  z-index: 1;
  &::before {
    content: '';
    position: absolute;
    top: 6px;
    left: -2px;
    width: calc(100% + 4px);
    height: calc(100% - 12px);
    background: ${({ theme }) => theme.colors.skillBackground};
    border-radius: 1rem;
    transition: .5s ease-in-out;
    transition-delay: .5s;
    transition-property: transform;
    transform: scaleY(1);
  }
  &:hover {
    cursor: pointer;
    &::before {
      transform: scaleY(0);
    }
    span {
      color: ${({ theme }) => theme.colors.primary};
    }
    svg {
      fill: ${({ theme }) => theme.colors.primary};
      transform: translateX(15%);
    }
  }
  svg {
    transition: all .5s;
  }
  &::after {
    content: '';
    position: absolute;
    left: 6px;
    top: -2px;
    height: calc(100% + 4px);
    width: calc(100% - 12px);
    background: ${({ theme }) => theme.colors.skillBackground};
    border-radius: 1rem;
    transform: scaleX(1);
    transition: all .5s ease-in-out;
    z-index: 1;
  }
  &:hover {
    cursor: pointer;
    &::after {
      transform: scaleX(0)
    }
  }
  @media (max-width: 980px) {
    margin-bottom: ${({ lastItem }) => !lastItem ? '2rem' : '0'};
  }
`;

export const SymbolContainer = styled.div`
  position: relative;
  z-index: 2;
`;

export const Symbol = styled(Lottie)``;

export const Title = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  margin: .75rem 0 .25rem;
  position: relative;
  color: ${({ theme }) => theme.colors.title};
  z-index: 2;
`;

export const MoreText = styled.span`
  transition: all .5s;
  color: ${({ theme }) => theme.colors.dataTimeText};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
`;