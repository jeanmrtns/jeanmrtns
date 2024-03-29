import styled from "styled-components";

export const Container = styled.section`
  margin-top: 4rem;
  animation: slideup 1s ease;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.6rem 1.7rem;

  @media (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Project = styled.li`
  padding: 1.5rem;
  border: 1px solid var(--primary);
  border-radius: 0.5rem;
  background-color: rgba(135, 62, 255, 0.1);
  display: flex;
  flex-direction: column;

  svg {
    max-width: 100%;
    object-position: center;
  }
`;

export const ProjectTitle = styled.h2`
  margin-top: 1.6rem;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 1.6rem;
  font-weight: 500;
`;

export const ProjectDescription = styled.p`
  margin: 1.4rem 0;
  font-size: 1.2rem;
  line-height: 1.8rem;
  color: var(--text);
`;

export const ButtonGroup = styled.div`
  margin-top: 3.2rem;
  display: flex;
  justify-content: flex-start;
  justify-self: flex-end;
  margin-top: auto;
`;

export const DemoButton = styled.a`
  margin-right: 1.6rem;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 0.25rem;
  border: 1px solid var(--secondary);
  background-color: var(--secondary);
  padding: 0.733rem 4rem;
  color: var(--primary-dark);
  transition: all 0.3s;

  &:hover {
    border-color: var(--primary);
    background-color: var(--primary);
    color: var(--text);
  }
`;

export const GithubButton = styled.a`
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 0.25rem;
  border: 1px solid var(--secondary);
  padding: 0.733rem 4rem;
  transition: all 0.3s;
  color: var(--white);

  &:hover {
    border-color: var(--primary);
  }
`;

export const PageFrame = styled.iframe`
  overflow: hidden;
`;