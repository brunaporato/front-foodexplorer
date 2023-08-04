import styled from "styled-components";

export const Container = styled.div`
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  width: fit-content;
  height: 29.2rem;
  margin: 2.4rem 2.4rem 2.4rem 0;

  flex-shrink: 0;

  border-radius: .8rem;
  border: 1px solid ${({ theme }) => theme.colors.dark_300};
  background-color: ${({ theme }) => theme.colors.dark_200};

  position: relative;

  > img {
    width: 8.8rem;
    height: 8.8rem;
    border-radius: 50%;
  }

  > p {
    color: ${({ theme }) => theme.colors.light_300};
    font-size: 1.6rem;
    font-weight: 500;

    cursor: pointer;
  }

  > span {
    color: ${({ theme }) => theme.colors.cake_200};
    font-family: 'Roboto', serif;
    text-align: center;
  }

  > section {
    display: flex;
    gap: 1.4rem;
    padding: .4rem 0;
    margin-bottom: 1.6rem;

    > button {
      background: none;
      border: none;
      transition: filter .3s;

      &:hover {
        filter: brightness(.8);
      }

      > svg {
        color: ${({ theme }) => theme.colors.light_100};
      }
    }

    > span {
      font-family: 'Roboto', serif;
      color: ${({ theme }) => theme.colors.light_300};
    }
  }

  .iconTop {
    position: absolute;
    top: .5rem;
    right: 2.5rem;
    cursor: pointer;
    transition: filter .3s;
    color: white;

    &:hover {
      filter: brightness(.8);
    }
  }
`