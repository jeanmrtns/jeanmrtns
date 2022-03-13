import { ReposData } from "../../pages";
import {
  ButtonGroup, Container, DemoButton,
  GithubButton, List, PageFrame, Project, ProjectDescription, ProjectTitle
} from "./styles";


interface ProjectsListProps {
  repos: ReposData[];
}

export const ProjectsList = ({ repos }: ProjectsListProps) => {
  return (
    <Container>
      <List>
        {
          repos.map((repo) => {
            return (
              <Project key={repo.id}>
                <PageFrame src={repo.homepage} allow="accelerometer; fullscreen; gyroscope; midi" />
                <ProjectTitle>{repo.name}</ProjectTitle>
                <ProjectDescription>{repo.description}</ProjectDescription>
                <ButtonGroup>
                  <DemoButton href={repo.homepage} target="_blank">Demo</DemoButton>
                  <GithubButton href={repo.html_url} target="_blank">Github</GithubButton>
                </ButtonGroup>
              </Project>
            )
          })
        }
      </List>
    </Container>
  )
}