import type { AppProps } from 'next/app';
import fetcher from '../util/fetch';
import { SWRConfig, SWRConfiguration } from 'swr';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../styles/Theme';
import GlobalStyles from '../styles/Global';
import Layout from '../components/Layout';
import { SportContext } from '../context/sportContext';
import { useEffect, useState } from 'react';
import { Sports } from '../model/Sports';
import { BasicEvent } from '../model/Event';

const swrConfig: SWRConfiguration = { fetcher };

function MyApp({ Component, pageProps }: AppProps) {
  const today = new Date().toISOString().split('T')[0];
  const [sport, setSport] = useState<Sports>('football');
  const [date, setDate] = useState<string>(today);
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);
  const [favorites, setFavorites] = useState<BasicEvent[]>([]);

  useEffect(() => {
    if (localStorage.getItem('favoriteEvents') !== null)
      setFavorites(JSON.parse(localStorage.getItem('favoriteEvents')!));
  }, []);

  const changeSport = (param: Sports) => {
    setSport(() => param);
  };
  const changeDate = (param: string) => {
    return setDate(() => param);
  };
  const changeTheme = () => {
    setIsDarkTheme((isDarkTheme) => (isDarkTheme = !isDarkTheme));
  };
  const updateFavorites = (param: BasicEvent[]) => {
    setFavorites(param);
  };

  return (
    <SWRConfig value={swrConfig}>
      <SportContext.Provider
        value={{
          sport,
          setSport: changeSport,
          date,
          setDate: changeDate,
          isDarkTheme,
          setIsDarkTheme: changeTheme,
          favorites,
          setFavorites: updateFavorites,
        }}
      >
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
          <GlobalStyles theme={isDarkTheme ? darkTheme : lightTheme} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </SportContext.Provider>
    </SWRConfig>
  );
}

export default MyApp;
