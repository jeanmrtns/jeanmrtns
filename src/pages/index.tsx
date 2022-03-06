import Head from "next/head";
import { Banner } from "../components/Banner";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ProjectsList } from "../components/ProjectsList";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jean Martins - FrontEnd Developer</title>
      </Head>
      <Header />
      <main className="container">
        <Banner />
        <ProjectsList />
      </main>
      <Footer />
    </>
  )
}
