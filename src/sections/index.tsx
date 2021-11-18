import React, { useState } from 'react';
import { ButtonTop } from '../components/ButtonTop';
import { SkillsModal } from '../components/SkillsModal';
import { Home } from './Home';
import { AboutMe } from './AboutMe';
import { ModalDataProps, Skills } from './Skills';
import { Projects } from './Projects';
import { Contact } from './Contact';
import { data } from '../utils/skillsCards';

interface SectionsProps {
  themeMode: boolean;
  changeTheme: (state: boolean) => void;
  isSkillsModalIsOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const Sections: React.FC<SectionsProps> = ({
  themeMode,
  changeTheme,
  isSkillsModalIsOpen,
  openModal,
  closeModal,
}) => {
  const [modalData, setModalData] = useState<ModalDataProps>(data[0].modal);

  return (
    <main>
      <ButtonTop />
      <SkillsModal
        isOpen={isSkillsModalIsOpen} 
        onRequestClose={closeModal}
        modalData={modalData}
        themeMode={themeMode}
      />
      <Home
        themeMode={themeMode} 
        changeTheme={changeTheme}
      />
      <AboutMe themeMode={themeMode} />
      <Skills 
        themeMode={themeMode} 
        openModal={openModal}
        setModalData={setModalData}
      />
      <Projects themeMode={themeMode} />
      <Contact />
    </main>
  );
}