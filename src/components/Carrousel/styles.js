import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
    
  .splide__arrow {
    height: 90%;
    width: 10%;
    font-size: 40px;
    background: none;

    opacity: 1;
    position: absolute;
  }

  .splide__arrow--prev {
    left: 0;
  }

  .splide__arrow--next {
    right: 0;
  }

  .splide__pagination__page{
    display: none;
  }
  
  .splide:not(.is-overflow) .splide__arrows {
    display: none;
  }
`

export const Gradient = styled.div`
  background: ${({ theme }) => theme.colors.gradient_100};
  width: 20rem;
  height: 100%;

  position: absolute;
`