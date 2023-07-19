import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2.4rem 1.5rem;

  background-color: ${({ theme }) => theme.colors.dark_600};

  position: absolute;
  bottom: 0;

  > div {
    display: flex;
    gap: .4rem;
    align-items: center;
  }
  
  .logo {
    > svg {
      width: 2rem;
      height: 2rem;
    }

    p {
      color: ${({ theme }) => theme.colors.light_700};
      font-weight: 700;
      font-size: 1.5rem;
    }
  }

  .reserved {
    p {
      color: ${({ theme }) => theme.colors.light_200};
      font-size: 1.2rem;
    }
  }
`