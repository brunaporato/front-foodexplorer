import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  position: relative;

  .page {
    padding: 1.6rem 5.6rem 13rem;
    text-align: center;

    /* padding-bottom: 9rem; */

    img {
      width: 26.4rem;
      height: 26.4rem;
      border-radius: 50%;
    }


    > a {
      color: ${({ theme }) => theme.colors.light_300};
      font-size: 2.4rem;
      font-weight: 500;

      display: flex;
      align-items: center;
      margin: 2rem 0 1.6rem;
    }

    > h1 {
      font-weight: 500;
      font-size: 2.7rem;
      margin: 1.6rem 0 2.4rem;
    }

    > p, h1 {
      color: ${({ theme }) => theme.colors.light_300};
      line-height: 140%;
    }

    .ingredients {
      display: grid;
      align-items: center;
      justify-items: center;

      grid-template-columns: 1fr 1fr 1fr;
      row-gap: 2.4rem;

      margin-top: 2.4rem;

      padding: .4rem .8rem;
    }

    > section {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.6rem;

      margin-top: 4.8rem;

      .items {
        display: flex;
        gap: 1.6rem;
        align-items: center;

        > button {
        background: none;
        border: none;
        width: 2.7rem;
        height: 2.7rem;
        }

        > span {
          font-family: 'Roboto', serif;
          font-size: 2.2rem;
          font-weight: 700;
          line-height: 160%;
        }
      }
    }
  }
`