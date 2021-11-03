import styled from 'styled-components';

export const Container = styled.div`
  .checkbox {
    opacity: 0;
    position: absolute;
  }

  .label {
    background-color: #111;
    border-radius: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    position: relative;
    height: 26px;
    width: 50px;
    transform: scale(1.5);
  }

  .label .ball {
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 2px;
    height: 22px;
    width: 22px;
    transform: translateX(0px);
    transition: transform 0.2s linear;
  }

  .checkbox:checked + .label .ball {
    transform: translateX(24px);
  }
`;

export const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.9rem;
  height: 1.9rem;
  svg {
    transform: translateX(-20%);
  }
  .left {
    transform: translateX(20%);
  }
  


`;