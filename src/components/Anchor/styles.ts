import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 1px;
  height: 1px;
  left: 0;
  margin-top: -5rem; /* esse valor varia de acordo com a altura do seu Header, se ele tiver 200px de altura coloque aqui -220px por exemplo */
  background-color: transparent;
  z-index: -1;
`;