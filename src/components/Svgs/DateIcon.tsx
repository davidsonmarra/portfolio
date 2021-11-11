import React from 'react';
import { useTheme } from 'styled-components';

export const DateIcon: React.FC = () => {
  const theme = useTheme();

  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 0 24 24" width="15px" fill={theme.colors.dataTimeText}>
      <path d="M0 0h24v24H0V0z" fill="none"/>
      <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V10h16v11zm0-13H4V5h16v3z"/>
    </svg>
  );
}