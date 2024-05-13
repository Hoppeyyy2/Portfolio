import styles from '@/styles/globals.css'
import AppProvider from '@/utils/provider';
import CursorContextProvider from "../utils/cursor_context";
import Cursor from "../comp/Cursor";
import { appWithTranslation } from 'next-i18next';
import App from 'next/app';
import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
function MyApp({ Component, pageProps, children }) {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])
  return <AppProvider>
    <CursorContextProvider>
      {isClient && isMobile? null:<Cursor/>}
      {children}
    <Component {...pageProps} />
    </CursorContextProvider>
  </AppProvider>
}

export default appWithTranslation(MyApp)