import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  colors: {
    background: 'hsl(250, 60%, 95%)',
    headerBackground: 'hsl(250, 60%, 95%)',
    sidebarBackground: '#490ECD',
    skillBackground: 'hsl(250, 50%, 90%)',
    btnTopBackground: 'hsl(250, 50%, 85%)',
    inputBackground: 'hsl(250, 60%, 94%)',
    headerText: '#222',
    text: '#222',
    title: '#111',
    titleSecondary: '#222222CC',
    dataTimeText: '#222222AA',
    primary: '#490ECD',
    secondary: '#915EFF', //B330EA
    themeIcon: '#490ECD',
    backgroundThemeIcon: '#22222215',
    backgroundThemeIcon2: '#22222208',
    filterIcon: 'brightness(0.8)',
    filterText: 'brightness(1.2)'
  }
}

export const darkTheme: DefaultTheme = {
  colors: {
    background: 'hsl(250, 28%, 12%)',
    headerBackground: 'hsl(250, 28%, 12%)',
    sidebarBackground: '#D9A404',
    skillBackground: 'hsl(250, 28%, 20%)',
    btnTopBackground: 'hsl(250, 28%, 25%)',
    inputBackground: 'hsl(250, 28%, 15%)',
    headerText: '#fefefe',
    text: '#fefefe',
    title: '#fff',
    titleSecondary: '#ddddddCC',
    dataTimeText: '#dddddd99',
    primary: '#D9A404',
    secondary: '#F2CB05', // 
    themeIcon:'#D9A404',
    backgroundThemeIcon: '#dddddd22',
    backgroundThemeIcon2: '#dddddd11',
    filterIcon: 'brightness(1.2)',
    filterText: 'brightness(0.8)'
  }
}