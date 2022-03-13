import styled from "styled-components";

export const Container = styled.section`
  margin-block: 3rem;
`;

export const Title = styled.h3`
  font-size: 2.25rem;
  color: var(--title);
`;

export const List = styled.ul`
  display: flex;
  margin-top: 1.5rem;

  li > a{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid var(--secondary);
    margin-right: 1rem;
    padding: 0.75rem 1rem;
    border-radius: 0.25rem;
    color: var(--title);
    transition: border-color 0.3s;

    svg {
      margin-right: 1rem;
    }

    &:hover {
      border-color: var(--primary);
    }
  }
`;