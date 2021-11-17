import React, { useState } from 'react';
import { Anchor } from '../../components/Anchor';
import { ScrollReveal } from '../../components/ScrollReveal';
import { SectionText } from '../../components/SectionText';
import { Container } from './styles';
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { dataProjects } from '../../utils/projectsData';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import { ProjectSlide } from '../../components/ProjectSlide';
import { DropdownCategory } from '../../components/DropdownCategory';
import { projectsCategories } from '../../utils/projectsCategories';

interface ProjectsProps{
  themeMode: boolean;
}

export interface ProjectProps {
  id: number;
  title: string;
  logo?: string,
  banner: any,
  descripton: string[];
  link: string;
  category: string[];
}

export interface CategoryProps {
  id: number;
  title: string;
  selected: boolean;
  key: string;
}

SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

export const Projects: React.FC<ProjectsProps> = ({ themeMode }) => {
  const [projects, setProjects] = useState<ProjectProps[]>(dataProjects);
  const [selectedCategory, setSelectedCategory] = useState<CategoryProps>(projectsCategories[0]);

  return (
    <Container>
      <Anchor id="projects" />
      <ScrollReveal
        origin="top"
        distance="3rem"
      >
        <SectionText
          title="Projetos"
          subTitle="o que eu fiz"
        />
        <ScrollReveal
          origin="top"
          distance="3rem"
          delay={1000}
          style={{zIndex: 2}}
        >
          <DropdownCategory 
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            setProjects={setProjects}
          />
        </ScrollReveal>
        <ScrollReveal
          origin="top"
          distance="3rem"
          delay={1500}
        >
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false
            }}
            className="slide-container"
            loop
            
          >
            {projects.map((project, index) => 
              <SwiperSlide key={index} className="slide">
                <ProjectSlide themeMode={themeMode} data={project} />
              </SwiperSlide>
            )} 
          </Swiper>
        </ScrollReveal>
      </ScrollReveal>
    </Container>
  );
}