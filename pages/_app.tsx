import React from 'react';
import Head from "next/head";
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { ThemeProvider } from "styled-components";

import { theme } from "../styles/theme";
import { GlobalStyle } from "../styles/global-styles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default MyApp;