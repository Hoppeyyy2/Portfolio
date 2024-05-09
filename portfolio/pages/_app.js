import styles from '@/styles/globals.css'
import AppProvider from '@/utils/provider';
import CursorContextProvider from "../utils/cursor_context";
import Cursor from "../comp/Cursor";
import App from 'next/app';

export default function MyApp({ Component, pageProps, children }) {
  return <AppProvider>
    <CursorContextProvider>
      <Cursor/>
      {children}
    <Component {...pageProps} />
    </CursorContextProvider>
  </AppProvider>
}
