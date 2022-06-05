import Link from 'next/link';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { BasicCategory, CategoryInfo } from '../../model/Categories';

interface P {
  category: BasicCategory;
}

export default function CategoryLink({ category, children }: PropsWithChildren<P>) {
  return (
    <Link
      href={{
        pathname: '/category/[slug]/[id]',
        query: { slug: category.slug, id: category.id },
      }}
      title={category.name}
    >
      {children || category.name}
    </Link>
  );
}
