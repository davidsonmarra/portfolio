import React from 'react';
import { useTheme } from 'styled-components';

export const MenuIcon: React.FC = () => {
  const theme = useTheme();

  return (
    <svg className="sidebar" xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 0 24 24" width="32px" fill={theme.colors.headerText}>
      <path d="M0 0h24v24H0z" fill="none"/>
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
    </svg>
  );
}
