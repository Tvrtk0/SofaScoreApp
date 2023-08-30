import Head from 'next/head';
import React from 'react';

interface MetaProps {
  title?: string;
  description?: string;
}

export default function Meta({ title, description }: MetaProps) {
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Tvrtko Babić" />
      <meta name="google-site-verification" content="248Irj9vU9g4I-oOdUQKgKN1D61ovJHLhDfqlNYal9s" />
    </Head>
  );
}

Meta.defaultProps = {
  title: 'SofaScore App',
  description: 'SofaScore Frontend Academy Project',
};
