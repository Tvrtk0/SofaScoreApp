import type { AppProps } from 'next/app';
import fetcher from '../util/fetch';
import { SWRConfig, SWRConfiguration } from 'swr';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/Theme';
import GlobalStyles from '../styles/Global';
import Layout from '../components/Layout';
import { SportContext } from '../context/sportContext';
import { useState } from 'react';
import { Sports } from '../model/Sports';

const swrConfig: SWRConfiguration = { fetcher };

function MyApp({ Component, pageProps }: AppProps) {
  const today = new Date().toISOString().split('T')[0];
  const [sport, setSport] = useState<Sports>('football');
  const [date, setDate] = useState<string>(today);

  const changeSport = (param: Sports) => {
    setSport(() => param);
  };
  const changeDate = (param: string) => {
    return setDate(() => param);
  };

  return (
    <SWRConfig value={swrConfig}>
      <SportContext.Provider value={{ sport, setSport: changeSport, date, setDate: changeDate }}>
        <ThemeProvider theme={theme}>
          <GlobalStyles theme={theme} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </SportContext.Provider>
    </SWRConfig>
  );
}

export default MyApp;
