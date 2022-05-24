import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>SofaScore App</title>
        <meta name="description" content="SofaScore Frontend Academy Project" />
        <meta name="author" content="Tvrtko Babić" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello world</h1>
    </div>
  );
};

export default Home;
