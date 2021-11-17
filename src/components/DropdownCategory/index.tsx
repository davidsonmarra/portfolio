import React, { useState } from 'react';
import { CategoryProps, ProjectProps } from '../../sections/Projects';
import { 
  Container, 
  Header, 
  HeaderTitle, 
  List, 
  ListItem 
} from './styles';
import { projectsCategories } from '../../utils/projectsCategories';
import { dataProjects } from '../../utils/projectsData';
import { ArrowDownIcon } from '../Svgs';


interface DropdownCategoryProps {
  selectedCategory: CategoryProps;

  setSelectedCategory: (category: CategoryProps) => void;
  setProjects: (projects: ProjectProps[]) => void;
}

export const DropdownCategory: React.FC<DropdownCategoryProps> = ({
  selectedCategory,
  setSelectedCategory,
  setProjects
}) => {
  const [isListOpen, setIsListOpen] = useState<boolean>(false);

  const handleChangeCategory = (category: CategoryProps, e: any) => {
    setSelectedCategory(category);
    e.target.value === "Todos" ?
    setProjects(dataProjects) :
    setProjects(dataProjects.filter(project => project.category.includes(category.title)));
    setTimeout(() => {
      setIsListOpen(false);
    }, 200);
  }

  return (
    <Container>
      <Header 
        onClick={() => setIsListOpen(!isListOpen)}
        isListOpen={isListOpen}
      >
        <HeaderTitle isListOpen={isListOpen}>
          {selectedCategory.title}<ArrowDownIcon />
        </HeaderTitle>
      </Header>
      <List isListOpen={isListOpen}>
        {
          projectsCategories.map((category, i) =>
            <ListItem 
              key={i} 
              isSelected={selectedCategory.title === category.title}
              onClick={(e) => handleChangeCategory(category, e)}
              value={category.title}
            >
              {category.title}
            </ListItem>
          )
        }
      </List>
    </Container>
  );
}