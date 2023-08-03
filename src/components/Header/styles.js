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

export const Menu = styled(Link)`
  > svg {
    color: ${({ theme }) => theme.colors.light_100};
    font-size: 3.2rem;
    position: relative;
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

    top: 49px;
    right: 19px;
  }

  &:hover {
    filter: none;
  }
`
