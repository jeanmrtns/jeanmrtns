import { AppProps } from "next/app"
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyle } from "../styles/GlobalStyle"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <ToastContainer autoClose={3000} />
    </>
  )
}

export default MyApp
