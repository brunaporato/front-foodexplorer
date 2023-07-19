import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  position: relative;

  .page {
    padding: 1rem 3.2rem 10rem;

    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    > a {
      color: ${({ theme }) => theme.colors.light_300};
      font-weight: 500;

      display: flex;
      align-items: center;
      margin: 2rem 0 1.6rem;
    }

    h1 {
      font-size: 3.2rem;
      font-weight: 500;
      line-height: 140%;

      color: ${({ theme }) => theme.colors.light_300};
    }

    .input-wrapper {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;

      label {
      color: ${({ theme }) => theme.colors.light_400};
      font-family: 'Roboto', serif;
      }

      > input[type="file"] {
        display: none;
      }

      .inputImage {
        display: flex;
        align-items: center;
        gap: .8rem;
        background: ${({ theme }) => theme.colors.dark_800};
        padding: 1.2rem 3.2rem;
        border-radius: .8rem;

        color: ${({ theme }) => theme.colors.light_100};
        font-weight: 500;
        line-height: 2.4rem;
      }

      .select {
        background: ${({ theme }) => theme.colors.dark_900};
        border-radius: .5rem;
  
        width: 100%;
  
        padding: .6rem;

        display: flex;
        align-items: center;

        position: relative;

        select {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          padding: 1rem;
          width: 100%;

          background: ${({ theme }) => theme.colors.dark_900};
          border: none;

          color: ${({ theme }) => theme.colors.light_400};
          font-family: 'Roboto', serif;
          font-size: 1.4rem;
          line-height: 160%;

          &:focus{
            outline: none;
          } 
        }

        .arrowDown {
          position: absolute;
          right: 1.6rem;
        }
      }
      
      > textarea {
        background: ${({ theme }) => theme.colors.dark_800};
        padding: 1.4rem;

        border: none;
        border-radius: .8rem;

        resize: none;
        height: 17.2rem;

        &::placeholder {
          font-family: 'Roboto', serif;
          font-size: 1.6rem;
          color: ${({ theme }) => theme.colors.light_500};
        }
      }
    }

    }
`