import styled from 'styled-components';
import Modal from 'react-modal';
import Lottie from 'react-lottie';

export const Container = styled(Modal)``;

export const SymbolContainer = styled.div``;

export const Symbol = styled(Lottie)``;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.title};
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.75rem;
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 2rem;
`;

export const ListItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: .5rem;
`;

export const CheckContainer = styled.div`
  position: absolute;
  left: -1.5rem;
`;

export const Check = styled(Lottie)``;

export const Text = styled.span`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
  margin-left: .75rem;
`;

export const CloseButtonContainer = styled.div`
  position: absolute;
  right: 1rem;
  transition: all .3s;
  :hover {
    cursor: pointer;
    filter: brightness(0.8);
  }
`;

export const CloseButton = styled(Lottie)``;