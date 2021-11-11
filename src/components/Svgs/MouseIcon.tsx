import React from 'react';
import { useTheme } from 'styled-components';

export const MouseIcon: React.FC = () => {
  const theme = useTheme();

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="50" data-name="Layer 1" viewBox="0 0 70 70">
      <path fill="none" stroke={theme.colors.primary} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M33.23 10.5h4.64A13.74 13.74 0 0151.5 24.3v19a16.1 16.1 0 01-16 16.2 16.1 16.1 0 01-16-16.2v-19a13.89 13.89 0 0113.73-13.8zM35.5 19.5v9"/>
    </svg>
  );
}