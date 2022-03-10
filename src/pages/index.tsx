import Head from "next/head";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Banner } from "../components/Banner";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ProjectsList } from "../components/ProjectsList";
import { apiGithub } from "../services/apiGithub";

export interface ReposData {
  deployments_url: string;
  description: string;
  name: string;
  html_url: string;
  id: string;
}

export default function Home() {

  const [repos, setRepos] = useState<ReposData[]>([]);

  useEffect(() => {
    async function getRepos() {
      try {
        const response = await apiGithub.get<ReposData[]>('/users/jeanmrtns/starred?page=1&per_page=4');
        const reposData = response.data;
        setRepos(reposData);
      } catch (error) {
        toast.error("Não foi possível carregar os projetos.");
      }
    }
    getRepos();
  }, []);

  return (
    <>
      <Head>
        <title>Jean Martins - FrontEnd Developer</title>
      </Head>
      <Header />
      <main className="container">
        <Banner />
        <ProjectsList repos={repos} />
      </main>
      <Footer />
    </>
  )
}
