import * as React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';

import type { AppProps } from 'next/app';
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
const MyApp = (props: AppProps) => {
 const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return  (
  <Component {...pageProps} />
)};

export default MyApp;
