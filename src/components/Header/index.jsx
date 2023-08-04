import { Container, Logo, Clickable, Menu } from "./styles";

import { FiMenu } from 'react-icons/fi';
import { PiReceipt, PiX } from 'react-icons/pi';

import polygon from "../../assets/polygon.svg";
import { useAuth } from "../../hooks/auth";
import { Input } from "../Input";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Footer } from "../Footer";

export function Header() {
  const [hideMenu, setHideMenu] = useState(true);
  const { user, signOut } = useAuth();

  const navigate = useNavigate();

  const isAdmin = user.isAdmin === 1;

  function handleHamburguerMenu() {
    setHideMenu(!hideMenu);
  }

  function handleSignOut() {
    navigate("/")
    signOut()
  }

  return (
    <Container>
          <Menu className={hideMenu ? 'hide' : null}>
          <div className="menu">
     <div className="top">
        <Link onClick={handleHamburguerMenu}><PiX size={23}/></Link>
        <h3>Menu</h3>
      </div>
      <Input
        placeholder="Busque por pratos ou ingredientes"
        // onKeyDown={handleSearch}
      />
      <ul>
        <li>
          { isAdmin ?
          <Link to="/new">
            Novo prato
          </Link> : ''
          }
        </li>
        <li>
          <a
            onClick={handleSignOut}
          >
            Sair
          </a>
       </li>
      </ul>
      <Footer className="footer" />
     </div>
          </Menu>
          <div id="header">
          <Clickable onClick={handleHamburguerMenu}>
            <FiMenu />
          </Clickable>
          <Logo to="/">
            <img src={polygon} alt="Logo" />
            <h1>food explorer</h1>
            <span>{ isAdmin ? `admin` : "" }</span>
          </Logo>
          { isAdmin ? <div></div> :
            <Clickable>
              <PiReceipt className="user"/>
              <span>0</span>
            </Clickable>
          }
          </div>
    </Container>
  )
}