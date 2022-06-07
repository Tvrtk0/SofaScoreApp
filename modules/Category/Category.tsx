import React, { useState } from 'react';
import { CategoryInfo } from '../../model/Categories';
import CategoryLink from '../Link/CategoryLink';
import CategoryTournaments from './CategoryTournaments';
import { StyledAccordion, StyledAccordionItems } from '../../styles/StyledCategories';

interface CategoryProps {
  categoryInfo: CategoryInfo;
}

export default function Category({ categoryInfo }: CategoryProps) {
  const [clicked, setClicked] = useState(false);

  const handleToggle = () => {
    setClicked((prev) => !prev);
  };

  return (
    <>
      <StyledAccordion clicked={clicked} onClick={handleToggle}>
        {categoryInfo.category.name}
      </StyledAccordion>
      <StyledAccordionItems clicked={clicked}>
        {clicked &&
          categoryInfo.uniqueTournamentIds?.map((tId) => {
            return <CategoryTournaments key={tId} id={tId} />;
          })}

        <CategoryLink key={categoryInfo.category.id} category={categoryInfo.category}>
          <li title={categoryInfo.category.name}>
            <a>All</a>
          </li>
        </CategoryLink>
      </StyledAccordionItems>
    </>
  );
}
