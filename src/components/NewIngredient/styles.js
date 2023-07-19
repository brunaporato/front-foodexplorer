import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: fit-content;

  background-color: ${({ theme, isNew }) => { isNew ? "none" : theme.colors.light_600}};
  color: ${({ theme, isNew }) => { isNew ? theme.colors.light_500 : theme.colors.light_100}};

  border: ${({ theme, isNew }) => { isNew ? `1px dashed ${theme.colors.light_500}` : "none"}};
  border-radius: .8rem;

  padding: 1rem 1.6rem;


  button {
    background: none;
    border: none;
  }

  input {
    height: 3.2rem;
    width: 100%;

    background: none;
    border: none;

    color: ${({ theme }) => theme.colors.light_100};
    font-family: 'Roboto', serif;


    &::placeholder {
      color: ${({ theme }) => theme.colors.light_500};
    }
  }
`