import styles from '@/styles/globals.css'
import AppProvider from '@/utils/provider';
import CursorContextProvider from "../utils/cursor_context";
import Cursor from "../comp/Cursor";
import { appWithTranslation } from 'next-i18next';
import App from 'next/app';

function MyApp({ Component, pageProps, children }) {
  return <AppProvider>
    <CursorContextProvider>
      <Cursor/>
      {children}
    <Component {...pageProps} />
    </CursorContextProvider>
  </AppProvider>
}

export default appWithTranslation(MyApp)