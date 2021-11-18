import styled from 'styled-components';

export const Container = styled.div`
  width: 49%;
  transition: all .5s;
  @media(max-width: 770px) {
    width: 100%;
  }
  .form{
    &__title{
      font-weight: 400;
      margin-bottom: 3rem;
      transition: all .5s;
    }
    &__div{
      position: relative;
      height: 48px;
      margin-bottom: 1.5rem;
      transition: all .5s;
    }
    &__input{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      font-size: 1rem;
      border: 1px solid ${({ theme }) => theme.colors.primary};
      border-radius: .5rem;
      outline: none;
      padding: 1rem;
      color: ${({ theme }) => theme.colors.text};
      background-color: ${({ theme }) => theme.colors.inputBackground};
      z-index: 1;
      transition: all .5s;
    }
    &__label{
      position: absolute;
      left: 1rem;
      top: .75rem;
      padding: 0 .25rem;
      background-color: ${({ theme }) => theme.colors.inputBackground};
      color: ${({ theme }) => theme.colors.titleSecondary};
      font-size: 1rem;
      transition: all .5s;
      z-index: 1;
    }
  }

  /*Input focus move up label*/
  .form__input:focus + .form__label {
    top: -.5rem;
    left: .8rem;
    color: ${({ theme }) => theme.colors.title};
    font-size: .75rem;
    font-weight: 500;
    z-index: 10;
    background: ${({ theme }) => theme.colors.background};
    border-radius: 0 0 .25rem .25rem;
  }

  /*Input focus sticky top label*/
  .form__input:not(:placeholder-shown).form__input:not(:focus) + .form__label {
    top: -.5rem;
    left: .8rem;
    z-index: 10;
    font-size: .75rem;
    font-weight: 500;
    background: ${({ theme }) => theme.colors.background};
    border-radius: 0 0 .25rem .25rem;
  }

  /*Input focus*/
  .form__input:focus {
    border: 1.5px solid ${({ theme }) => theme.colors.secondary};
  }
`;