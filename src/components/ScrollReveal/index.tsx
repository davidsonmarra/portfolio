import React, { useRef, useEffect, CSSProperties } from 'react';
import { Container } from './styles';
import scrollReveal from 'scrollreveal';

interface ScrollRevealProps {
  style?: CSSProperties;
  origin: string;
  distance: string;
  delay?: number;
  duration?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  origin,
  distance,
  delay = 500,
  duration = 2500,
  style
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        origin: origin,
        distance: distance,
        duration: duration,
        reset: false,
        delay: delay,
        mobile: false
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
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