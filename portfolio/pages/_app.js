import styles from '@/styles/globals.css'
import AppProvider from '@/utils/provider';
import { appWithTranslation } from 'next-i18next';
import App from 'next/app';
import Head from 'next/head';
import { useEffect, useState } from 'react';
function MyApp({ Component, pageProps, children }) {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])
  return <>
  <Head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
  <link href="https://fonts.googleapis.com/css2?family=Kiwi+Maru&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Noto+Sans+TC:wght@100..900&display=swap" rel="stylesheet"/>
  </Head>
  <AppProvider>
      {children}
    <Component {...pageProps} />
  </AppProvider>
  </>
}

export default appWithTranslation(MyApp)