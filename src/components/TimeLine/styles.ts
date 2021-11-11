import styled from 'styled-components';

interface TitleSectionProps {
  isAcademy: boolean;
}

export const Container = styled.div`
  padding: 0 1rem;
  width: 100%;
`;

export const TitleContainer = styled.div<TitleSectionProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  .academy {
    margin-right: 2rem;
    color: ${({ theme, isAcademy }) => isAcademy ? theme.colors.primary : theme.colors.title};
    background-color: ${({ theme, isAcademy }) => isAcademy ? theme.colors.backgroundThemeIcon : 'transparent'};
    :hover {
      filter: ${({ isAcademy }) => isAcademy ? 'brightness(1.2)' : 'brightness(0.8)'};
      background-color: ${({ theme }) => theme.colors.backgroundThemeIcon2}
    }
  }
  .work {
    color: ${({ theme, isAcademy }) => !isAcademy ? theme.colors.primary : theme.colors.title};
    background-color: ${({ theme, isAcademy }) => !isAcademy ? theme.colors.backgroundThemeIcon : 'transparent'};
    :hover {
      filter: ${({ isAcademy }) => !isAcademy ? 'brightness(1.2)' : 'brightness(0.8)'};
      background-color: ${({ theme }) => theme.colors.backgroundThemeIcon2}
    }
  }
`;

export const TitleSection = styled.h3<TitleSectionProps>`
  border: 1px solid ${({ theme }) => theme.colors.backgroundThemeIcon};
  padding: .5rem 1rem;
  border-radius: 2rem;
  transition: all .5s;
  display: flex;
  justify-content: center;
  align-items: center;
  & svg {
    transition: all .5s;
    margin-right: .5rem;
    fill: ${({ theme, isAcademy }) => isAcademy ? theme.colors.primary : theme.colors.title};
  }
  .work-icon {
    fill: ${({ theme, isAcademy }) => !isAcademy ? theme.colors.primary : theme.colors.title};
  }
  :hover {
    cursor: pointer;
  }
`;

export const TimeLineContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const List = styled.ul`
  list-style: none;
  max-width: 920px;
  margin-top: 2rem;
`;