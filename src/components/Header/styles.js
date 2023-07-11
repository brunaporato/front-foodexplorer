import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.dark_700};
  padding: 5.6rem 2.8rem 2.4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
` 

export const Menu = styled.button`
  border: none;
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
`

export const Logo = styled.button`
  background: none;
  border: none;

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
`
