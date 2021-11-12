import React, { useState } from 'react';
import { SchoolIcon, WorkIcon } from '../Svgs';
import { 
  Container, 
  TitleContainer, 
  TitleSection, 
  TimeLineContainer,
  List
} from './styles';
import { dataAcademy, dataProfessional } from '../../utils/timeLineData';
import ElementTimeLine from '../ElementTimeLine';

export interface DataProps {
  title: string;
  local: string;
  date: string;
  id: number;
}

export const TimeLine: React.FC = () => {
  const [isAcademy, setIsAcademy] = useState<boolean>(true);
  const [data, setData] = useState<DataProps[]>(dataAcademy);

  const handleChoseAcademy = () => {
    setIsAcademy(true);
    setData(dataAcademy);
  }

  const handleChoseProfessional = () => {
    setIsAcademy(false);
    setData(dataProfessional);
  }

  return (
    <Container>
      <TitleContainer 
        isAcademy={isAcademy}
      >
        <TitleSection 
          className="academy"
          isAcademy={isAcademy}
          onClick={handleChoseAcademy}
        >
          <SchoolIcon /> Acadêmica
        </TitleSection>
        <TitleSection 
          className="work"
          isAcademy={isAcademy}
          onClick={handleChoseProfessional}
        >
          <WorkIcon className="work-icon"/> Profissional
        </TitleSection>
      </TitleContainer>
      <TimeLineContainer>
          <List>
            {
              data.map((it, i) =>
                <ElementTimeLine 
                  key={i}
                  item={it}
                  max={data.length + 1}
                />
              )
            }
          </List>
        </TimeLineContainer>
    </Container>
  );
}