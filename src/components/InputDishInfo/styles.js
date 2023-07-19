import styled from "styled-components";

export const Container = styled.input`
  background: ${({ theme }) => theme.colors.dark_800};
  border: none;
  border-radius: .8rem;

  width: 100%;

  padding: 1.2rem 1.4rem;

  &::placeholder {
    font-family: 'Roboto', serif;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.light_500};
  }
`