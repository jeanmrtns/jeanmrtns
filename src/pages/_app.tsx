import { AppProps } from "next/app";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { GlobalStyle } from "../styles/GlobalStyle";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
      <ToastContainer autoClose={3000} />
    </>
  )
}

export default MyApp
