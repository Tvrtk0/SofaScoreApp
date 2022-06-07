import React, { useContext } from 'react';
import styled from 'styled-components';
import useSWR from 'swr';
import { SportContext } from '../../context/sportContext';
import { CategoryInfo } from '../../model/Categories';
import { CategoryLoading } from '../../styles/StyledCategories';
import { API_BASENAME } from '../../util/fetch';
import { sortCategories } from '../../util/sort';
import Category from './Category';

const StyledCategoryList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export default function CategoryList() {
  const sportsInfo = useContext(SportContext);
  const urlCategoryDetails = `${API_BASENAME}/sport/${sportsInfo?.sport}/${sportsInfo?.date}/7200/categories`;
  const { data, error } = useSWR(urlCategoryDetails);

  if (!data && !error) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <CategoryLoading />
        <CategoryLoading />
        <CategoryLoading />
      </div>
    );
  }
  if (!data) {
    return <div>An error has occurred...</div>;
  }

  const categories: CategoryInfo[] = sortCategories(data.categories);

  return (
    <StyledCategoryList>
      {categories.map((c) => {
        return <Category key={c.category.id} categoryInfo={c} />;
      })}
    </StyledCategoryList>
  );
}
