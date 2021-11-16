import {
  animationBackEndLight,
  animationBackEndDark,
  animationFrontEndDark,
  animationMobileLight,
  animationMobileDark,
  animationModalBackEndLight,
  animationModalBackEndDark,
  animationModalFrontLight,
  animationModalFrontDark,
  animationModalMobileLight,
  animationModalMobileDark
} from '../components/Animations';

export const data = [
  {
    id: 1,
    title: "Back-End",
    imageLight: animationBackEndLight,
    imageDark: animationBackEndDark,
    modal: {
      imageLight: animationModalBackEndLight,
      imageDark: animationModalBackEndDark,
      title: "Back-End",
      text: [
        "JavaScript",
        "TypeScript",
        "NodeJS",
        "MySQL"
      ]
    }
  },
  {
    id: 2,
    title: "Front-End",
    imageLight: animationFrontEndDark,
    imageDark: animationFrontEndDark,
    modal: {
      imageLight: animationModalFrontLight,
      imageDark: animationModalFrontDark,
      title: "Front-End",
      text: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "ReactJS",
        "Styled Components",
        "Redux",
        "Axios",
        "Sites Responsivos"
      ]
    }
  },
  {
    id: 3,
    title: "Mobile",
    imageLight: animationMobileLight,
    imageDark: animationMobileDark,
    modal: {
      imageLight: animationModalMobileLight,
      imageDark: animationModalMobileDark,
      title: "Mobile",
      text: [
        "React Native",
        "Styled Components",
        "Redux",
        "Axios",
        "Apps Responsivos"
      ]
    }
  }
]