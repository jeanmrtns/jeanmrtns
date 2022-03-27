import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 7rem;
  -webkit-animation: slideup 1s forwards;
  animation: slideup 1s forwards;

  h1 {
    margin-bottom: 2rem;
  }

  label {
    margin-bottom: 0.25rem;
    font-size: 1.2rem;
    margin-top: 1rem;
  }

  input, textarea {
    width: 100%;
    border: 0;
    border-radius: 0.25rem;
    padding: 1rem 1.25rem;
    outline-color: var(--primary);
    background-color: rgba(135, 62, 255, 0.3);
    color: var(--text);
    font-size: 1.25rem;
  }

  textarea {
    height: fit-content;
    resize: none;
    -webkit-resize: none;
  }

  button {
    margin-top: 2rem;
    max-width: 15rem;
    background-color: var(--secondary);
    padding: 1rem 2rem;
    border: 0;
    border-radius: 0.25rem;
    color: var(--title);
    font-weight: bold;
    font-size: 1.2rem;
    transition: filter 0.3s;

    &:hover {
      filter: opacity(0.8);
    }
  }
`;

export const ErrorText = styled.p`
  color: red;
  margin-top: 0.25rem;
`;