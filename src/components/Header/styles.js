import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.dark_700};
  padding: 5.6rem 2.8rem 2.4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
` 

export const Hamburguer = styled(Link)`
  background: none;
  width: 3.2rem;
  height: 3.2rem;
  position: relative;
  

  > svg {
    color: ${({ theme }) => theme.colors.light_100};
    font-size: 3.2rem;
  }

  > span {
    position: absolute;
    
    color: ${({ theme }) => theme.colors.light_100};

    background-color: ${({ theme }) => theme.colors.tomato_100};
    font-size: 1.4rem;
    font-weight: 500;
    border-radius: 50%;
    padding: 1.2rem;

    width: 2rem;
    height: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    top: -9px;
    right: -9px;
  }

  &:hover {
    filter: none;
  }
`

export const Logo = styled(Link)`
  background: none;

  color: ${({ theme }) => theme.colors.light_100};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;

  font-family: 'Roboto';

  h1 {
    font-size: 2.2rem;
    font-weight: 700;
  }

  span {
    font-size: 1.2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.cake_200};
  }

  &:hover {
    filter: none;
  }
`

export const Menu = styled.div`
 width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .menu {
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
  }

  .footer {
    position: absolute;
    bottom: 0;
  }
`
