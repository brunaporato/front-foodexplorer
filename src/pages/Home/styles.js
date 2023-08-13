import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  position: relative;


  .page {
    padding-bottom: 15rem;

    .top {
    background: ${({ theme }) => theme.colors.gradient_200};
    height: 12rem;
    min-width: 31rem;

    margin: 4.4rem 1.6rem 6.2rem 3.6rem;
    position: relative;

    display: flex;
    flex-direction: row-reverse;

    > img {
      position: absolute;
      left: -3rem;
      bottom: 0;
      width: clamp(1.9rem, 45%, 25rem);
      height: auto;
    }

    .text {
      min-width: 20rem;
      color: ${({ theme }) => theme.colors.light_300};

      margin: 3.9rem 2.1rem 0 18.3rem;

      > h1 {
        font-size: 1.7rem;
        font-weight: 600;
        line-height: 140%;
      }

      > p {
        line-height: 140%;
        font-size: 1.2rem;
      }
    }
    }

    .meal {
      margin-left: 2.4rem;
      
      > h2 {
        color: ${({ theme }) => theme.colors.light_300};
        font-weight: 500;
        font-size: 1.8rem;
      }

      .cards {
        display: flex;
        overflow-x: scroll;

        position: relative;

        gap: 1.5rem;

        &::-webkit-scrollbar-track {
          background-color: ${({ theme }) => theme.colors.dark_400};
        }
        &::-webkit-scrollbar {
            height: 7px;
        }
        &::-webkit-scrollbar-thumb {
            background: ${({ theme }) => theme.colors.dark_1000};
            border-radius: .8rem;
        }
      }

      .left {
        transform: matrix(-1, 0, 0, 1, 0, 0);
      }

      .right {
        position: absolute;
        right: 0;
      }
    }

    .desktop {
      display: none;
    }
  }

  @media (min-width: 800px) {
    .page {
      padding: 0 12.4rem 15rem;
    
      .top {
        height: 26rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
  
        margin-top: 8rem;
  
  
        > img {
          width: clamp(30rem, 45%, 50rem);
        }
  
        .text {
          margin-left: 30rem;
          h1 {
            font-size: 4rem;
            font-weight: 500;
          }
  
          p {
            font-size: clamp(1.6rem, 60%, 16rem);
          }
        }
      }
  
      .meal {
        margin-top: 2rem;
       
        h2 {
          font-size: 3.2rem;
        }
        
        .cards {
          overflow: hidden;
          gap: 0;
        }
      }

      .desktop {
        display: inline;
      }

      .mobile {
        display: none;
      }
    }
  }
  `

export const Gradient = styled.div`
  background: ${({ theme }) => theme.colors.gradient_100};
  width: 20rem;
  height: 100%;

  position: absolute;
`
