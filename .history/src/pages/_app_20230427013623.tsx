import { EmotionCache } from '@emotion/cache';
import '../styles/global.css';

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
