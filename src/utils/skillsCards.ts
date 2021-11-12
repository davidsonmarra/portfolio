import animationBackEndLight from './animationBackEndLight.json';
import animationBackEndDark from './animationBackEndDark.json';

// import animationFrontEndLight from './animationFrontEndLight.json';
import animationFrontEndDark from './animationFrontEndDark.json';

import animationMobileLight from './animationMobileLight.json';
import animationMobileDark from './animationMobileDark.json';

export const data = [
  {
    title: "Back-End",
    imageDark: animationBackEndDark,
    imageLight: animationBackEndLight,
    id: 1
  },
  {
    title: "Front-End",
    imageDark: animationFrontEndDark,
    imageLight: animationFrontEndDark,
    id: 2
  },
  {
    title: "Mobile",
    imageDark: animationMobileDark,
    imageLight: animationMobileLight,
    id: 3
  }
]