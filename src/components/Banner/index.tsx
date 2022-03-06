import { About, Container, Name, Title } from "./styles"

export const Banner = () => {
  return (
    <Container>
      <Name>Jean Martins - 22 anos</Name>
      <Title>Meus principais projetos</Title>
      <About>
        <p>Sou desenvolvedor desde 2019 e estou procurando melhorar um pouco a cada dia.</p>
        <p>Trabalho como desenvolvedor Full-Stack, utilizando ReactJS e NodeJS para nossos projetos.</p>
      </About>
    </Container>
  )
}