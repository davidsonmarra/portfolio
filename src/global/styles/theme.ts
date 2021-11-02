import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  colors: {
    background: 'hsl(250, 60%, 99%)',
    headerBackground: 'hsl(250, 60%, 99%)',
    headerText: '#222',
    text: '#222',
    primary: '#8b00bf',
    secondary: '#d300fb',
    themeIcon: '#8b00bf'
  }
}

export const darkTheme: DefaultTheme = {
  colors: {
    background: 'hsl(250, 28%, 12%)',
    headerBackground: 'hsl(250, 28%, 12%)',
    headerText: '#fefefe',
    text: '#fefefe',
    primary: '#EDCA00',
    secondary: '#FFD700',
    themeIcon: '#EDCA00'
  }
}