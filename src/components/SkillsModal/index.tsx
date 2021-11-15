import React, { useState } from 'react';
import { 
  Container, 
  SymbolContainer, 
  Symbol, 
  Title,
  List,
  ListItem,
  Check,
  CheckContainer,
  Text,
  CloseButtonContainer,
  CloseButton
} from './styles';
import { 
  animationCheckLight, 
  animationCheckDark,
  animationCloseModalLight,
  animationCloseModalDark
} from '../Animations/index';
import { ModalDataProps } from '../../sections/Skills';

interface SkillsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  themeMode: boolean;
  modalData: ModalDataProps;
}

export const SkillsModal: React.FC<SkillsModalProps> = ({
  isOpen,
  onRequestClose,
  themeMode,
  modalData
}) => {
  // eslint-disable-next-line
  const [animationState, setAnimationState] = useState({
    isStopped: false, isPaused: false 
  });
  // eslint-disable-next-line
  const [animationStateCheck, setAnimationStateCheck] = useState({
    isStopped: false, isPaused: false 
  });
  // eslint-disable-next-line
  const [animationStateClose, setAnimationStateClose] = useState({
    isStopped: false, isPaused: false 
  });

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: themeMode ? modalData.imageDark : modalData.imageLight,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const defaultOptionsCheck = {
    loop: false,
    autoplay: true, 
    animationData: themeMode ? animationCheckDark : animationCheckLight,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const defaultOptionsClose = {
    loop: false,
    autoplay: true, 
    animationData: themeMode ? animationCloseModalDark : animationCloseModalLight,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Container
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      closeTimeoutMS={500}
    >
      <CloseButtonContainer onClick={onRequestClose}>
        <CloseButton 
          height="2rem"
          width="2rem"
          options={defaultOptionsClose}
          isStopped={animationStateClose.isStopped}
          isPaused={animationStateClose.isPaused}
          
        />
      </CloseButtonContainer>
      <SymbolContainer>
        <Symbol
          width='8rem'
          options={defaultOptions}
          isStopped={animationState.isStopped}
          isPaused={animationState.isPaused}
        />
        <Title>{modalData.title}</Title>
        <List>
          {
            modalData.text.map((item, i) => 
              <ListItem key={i}>
                <CheckContainer>
                  <Check 
                    height="2rem"
                    width="2rem"
                    options={defaultOptionsCheck}
                    isStopped={animationStateCheck.isStopped}
                    isPaused={animationStateCheck.isPaused}
                  />
                </CheckContainer>
                <Text>{item}</Text>
              </ListItem>
            )
          }
        </List>
      </SymbolContainer>
    </Container>
  );
}