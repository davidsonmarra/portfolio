import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media(max-width: 770px) {
    width: 100%;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%; 
  @media(max-width: 770px) {
    flex-direction: column;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 1.4rem;
  display: flex;
  justify-content: flex-end;
  @media(max-width: 770px) {
    justify-content: center;
  }
`;

export const Button = styled.button`
  padding: 1rem;
  border-radius: .5rem;
  border: none;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  font-weight: 500;
  transition: all .5s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: .9rem;
  span {
    margin-right: 1rem;
  }
  :hover {
    cursor: pointer;
    filter: brightness(1.2);
  }
`;