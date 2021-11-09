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
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.img`
  width: 15rem;
  border-radius: .8rem;
`;