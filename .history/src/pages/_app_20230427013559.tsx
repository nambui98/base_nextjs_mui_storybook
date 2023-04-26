import '../styles/global.css';

import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
 const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return  (
  <Component {...pageProps} />
)};

export default MyApp;
