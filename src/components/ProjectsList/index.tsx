import {
  Container,
  List,
  Project,
  ProjectTitle,
  ProjectDescription,
  ButtonGroup,
  DemoButton,
  GithubButton
} from "./styles";

import EmptyImage from '../../assets/empty_image.svg';
import { ReposData } from "../../pages";

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
                <EmptyImage />
                <ProjectTitle>{repo.name}</ProjectTitle>
                <ProjectDescription>{repo.description}</ProjectDescription>
                <ButtonGroup>
                  <DemoButton href={repo.deployments_url} target="_blank">Demo</DemoButton>
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