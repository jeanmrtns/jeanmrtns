import { AppProps } from "next/app";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Layout } from "../components/Layout";
import { GlobalStyle } from "../styles/GlobalStyle";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
        <ToastContainer autoClose={3000} />
      </Layout>
    </>
  )
}

export default MyApp
