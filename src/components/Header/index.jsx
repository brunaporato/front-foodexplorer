import { Container, Logo, Menu } from "./styles";

import { FiMenu } from 'react-icons/fi';
import { PiReceipt } from 'react-icons/pi';

import polygon from "../../assets/polygon.svg";
import { useAuth } from "../../hooks/auth";

export function Header() {
  const { user } = useAuth();

  const isAdmin = user.isAdmin === 1;

  return (
    <Container>
          <Menu to="/menu">
            <FiMenu />
          </Menu>
          <Logo to="/">
            <img src={polygon} alt="Logo" />
            <h1>food explorer</h1>
            <span>{ isAdmin ? `admin` : "" }</span>
          </Logo>
          { isAdmin ? <div></div> :
            <Menu>
              <PiReceipt className="user"/>
              <span>0</span>
            </Menu>
          }
        
    </Container>
  )
}