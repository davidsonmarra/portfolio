import React, { useRef, useEffect, CSSProperties } from 'react';
import { Container } from './styles';
import scrollReveal from 'scrollreveal';

interface ScrollRevealProps {
  style?: CSSProperties;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, style }) => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        origin: 'top',
        distance: '10rem',
        reset: true,
        delay: 500,
        mobile: true
      });
  }, []);

  return (
    <Container
      ref={sectionRef}
      style={style}
      data-testid="section"
    >
      {children}
    </Container>
  );
};