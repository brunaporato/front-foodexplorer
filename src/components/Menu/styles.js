import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  padding: 0 2.8rem;

  .top {
    display: flex;
    gap: 1.6rem;
    
    padding: 5.6rem 0 2.4rem;

    > h3 {
      font-family: 'Roboto', serif;
      font-size: 2.1rem;
      font-weight: 400;
    }

    > svg {
      cursor: pointer;
      font-size: 1.8rem;
      color: ${({ theme }) => theme.colors.light_100};
    }
  }

  > ul {
    list-style: none;
  }

  li {
    padding: 1rem;
  }

  a {
    font-size: 2rem;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.light_300};
  }
`