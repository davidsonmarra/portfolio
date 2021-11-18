import styled from 'styled-components';

export const Container = styled.div`
  max-width: 920px;
  margin: 0 auto;
  padding: 0 1rem;
  margin-bottom: 5rem;
  .slide-container {
    width: 100%;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 1rem;
    background: ${({ theme }) => theme.colors.inputBackground};
  }
  .slide {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-button-prev {
    color: ${({ theme }) => theme.colors.primary};
  }

  .swiper-button-next {
    color: ${({ theme }) => theme.colors.primary};
  }

  .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.colors.primary};
  }

  .swiper-pagination-bullet {
    background: ${({ theme }) => theme.colors.primary};
  }
  
`;
