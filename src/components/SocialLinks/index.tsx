import { FiGithub, FiLinkedin, FiTwitch } from "react-icons/fi";
import { Container, List, Title } from "./styles";

export function SocialLinks() {
  return (
    <Container>
      <Title>Minhas redes</Title>
      <List>
        <li>
          <a href="https://github.com/jeanmrtns" target="_blank" rel="noreferrer">
            <FiGithub />
            Github
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jeanmrtns/" target="_blank" rel="noreferrer">
            <FiLinkedin />
            Linkedin
          </a>
        </li>
        <li>
          <a href="https://www.twitch.tv/jeanzzn" target="_blank" rel="noreferrer">
            <FiTwitch />
            Twitch (as vezes)
          </a>
        </li>
      </List>
    </Container>
  )
}