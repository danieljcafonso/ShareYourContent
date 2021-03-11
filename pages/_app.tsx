import { FC } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: { Component: FC; pageProps: any }) {
  return <Component {...pageProps} />;
}

export default MyApp;
