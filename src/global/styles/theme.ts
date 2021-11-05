import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  colors: {
    background: 'hsl(250, 60%, 95%)',
    headerBackground: 'hsl(250, 60%, 95%)',
    sidebarBackground: '#490ECD',
    headerText: '#222',
    text: '#222',
    primary: '#490ECD',
    secondary: '#B330EA',
    themeIcon: '#490ECD',
    backgroundThemeIcon: '#22222222',
    filterIcon: 'brightness(0.8)',
    filterText: 'brightness(1.2)'
  }
}

export const darkTheme: DefaultTheme = {
  colors: {
    background: 'hsl(250, 28%, 12%)',
    headerBackground: 'hsl(250, 28%, 12%)',
    sidebarBackground: '#D9A404',
    headerText: '#fefefe',
    text: '#fefefe',
    primary: '#D9A404',
    secondary: '#F2CB05',
    themeIcon:'#D9A404',
    backgroundThemeIcon: '#dddddd22',
    filterIcon: 'brightness(1.2)',
    filterText: 'brightness(0.8)'
  }
}