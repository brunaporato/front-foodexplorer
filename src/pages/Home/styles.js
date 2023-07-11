import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  .top {
    background: ${({ theme }) => theme.colors.gradient_200};
    height: 12rem;

    margin: 4.4rem 1.6rem 6.2rem 3.6rem;
    position: relative;

    > img {
      position: absolute;
      left: -3rem;
      bottom: 0;
      width: clamp(9rem, 50%, 19.1rem);
      height: auto;
    }

    .text {
      width: 20rem;
      color: ${({ theme }) => theme.colors.light_300};
      position: absolute;
      right: .8rem;
      bottom: 2.2rem;

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
      overflow-y: scroll;
    }
  }
`
