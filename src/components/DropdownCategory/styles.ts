import styled from 'styled-components';

interface HeaderProps {
  isListOpen?: boolean;
  isSelected?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  align-items: flex-end;
  margin-bottom: 3rem;
  z-index: 2;
  @media(max-width: 865px) {
    align-items: center;
  }
`;

export const Header = styled.button<HeaderProps>`
  border: none;
  z-index: 2;
  background-color: ${({ theme, isListOpen }) => 
    !isListOpen ? theme.colors.skillBackground :
    theme.colors.btnTopBackground
  };
  border-radius: ${({ isListOpen }) => 
    !isListOpen ? ".5rem" :
    ".5rem .5rem 0 0"
  };
  width: 15rem;
  &:hover {
    background-color: ${({ theme }) => theme.colors.btnTopBackground};
  }
  transition: all .8s;
`;

export const HeaderTitle = styled.div<HeaderProps>`
  padding: .5rem 1rem .5rem 2rem;
  width: 15rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    transition: all .8s;
    transform: ${({ isListOpen }) => isListOpen ? "rotate(180deg)" : "rotate(0deg)"}
  }
  color: ${({ theme }) => theme.colors.title};
  font-weight: bold;
  font-size: 1.15rem;
`;

export const List = styled.div<HeaderProps>`
  width: 15rem;
  display: flex;
  z-index: 2;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.skillBackground};
  position: absolute;
  bottom: 0;
  transform: ${({ isListOpen }) => !isListOpen ? "translateY(80%);" : "translateY(100%)"};
  opacity: ${({ isListOpen }) => !isListOpen ? "0" : "1"};
  visibility: ${({ isListOpen }) => !isListOpen ? "hidden" : "visible"};
  transition: all .3s;
  border-radius: 0 0 .5rem .5rem;
`;

export const ListItem = styled.button<HeaderProps>`
  background-color: ${({ theme, isSelected }) => 
    !isSelected ? theme.colors.skillBackground :
    theme.colors.primary
  };
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.backgroundThemeIcon};
  padding: .25rem .5rem;
  color: ${({ theme, isSelected }) => 
    !isSelected ? theme.colors.text :
    theme.colors.background
  };
  font-weight: ${({ isSelected }) => 
    !isSelected ? "500" :
    "bold"
  };
  &:hover {
    filter: brightness(1.05);
  }
  &:last-child {
    border-radius: 0 0 .5rem .5rem;
  }
`;