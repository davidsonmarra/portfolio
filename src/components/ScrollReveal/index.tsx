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
        distance: '80px',
        reset: true,
        delay: 500
      });
  }, []);

  return (
    <Container
      ref={sectionRef}
      style={style}
      className="scroll-section"
      data-testid="section"
    >
      {children}
    </Container>
  );
};