import { GetServerSideProps } from 'next';
import React from 'react';
import { BasicEvent, FullEvent } from '../../../model/Event';
import CategoryDetails from '../../../modules/Category/CategoryDetails';
import EventLink from '../../../modules/Link/EventLink';
import fetcher, { API_BASENAME } from '../../../util/fetch';

interface CategoryPageInterface {
  id: number;
}

export default function CategoryDetailsPage({ id }: CategoryPageInterface) {
  return <CategoryDetails id={id} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params, res } = context;

  try {
    //@ts-ignore
    const { slug, id } = params;

    //const data = await fetcher(`${API_BASENAME}/category/${id}/scheduled-events/2022-05-28`);

    const props: CategoryPageInterface = { id };

    return {
      props: props,
    };
  } catch (error) {
    res.statusCode = 404;
    return { props: { error } };
  }
};
