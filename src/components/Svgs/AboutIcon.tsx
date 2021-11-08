import React from 'react';
import { useTheme } from 'styled-components';

export const AboutIcon: React.FC = () => {
  const theme = useTheme();

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={theme.colors.background} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  );
}