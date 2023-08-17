import { Container, Logo, Clickable, Menu } from "./styles";

import { FiMenu } from 'react-icons/fi';
import { PiReceipt, PiX, PiSignOut } from 'react-icons/pi';

import polygon from "../../assets/polygon.svg";
import { useAuth } from "../../hooks/auth";
import { Input } from "../Input";
import { Footer } from "../Footer";
import { ButtonIcon } from "../ButtonIcon";
import { Button } from "../Button";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export function Header({onChange}) {
  const { user, signOut } = useAuth();
  const [hideMenu, setHideMenu] = useState(true);
  const [order, setOrder] = useState(0);

  const navigate = useNavigate();

  const isAdmin = user.isAdmin === 1;

  function handleHamburguerMenu() {
    setHideMenu(!hideMenu);
  }

  function handleSearch(e) {
    if(e.key === 'Enter') {
      setHideMenu(true);
    }
  }

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  function handleNewDish() {
    navigate("/new");
  }

  //classname estava passando para o input dentro do component input, portanto, para desaparecer inteiro no mobile tive que fazer uma div

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
        onChange={onChange}
        onKeyDown={handleSearch}
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
          <Clickable onClick={handleHamburguerMenu} className="mobile">
            <FiMenu />
          </Clickable>
          <Logo to="/">
            <img src={polygon} alt="Logo" />
            <h1>food explorer</h1>
            <span>{ isAdmin ? `admin` : "" }</span>
          </Logo>
          <div className="search desktop">
          <Input
            placeholder="Busque por pratos ou ingredientes"
            onChange={onChange}
            onKeyDown={handleSearch}
          />
          </div>
          { isAdmin ? <div></div> :
            <Clickable className="mobile">
              <PiReceipt className="user"/>
              <span>{order}</span>
            </Clickable>
          }

          { isAdmin ?
          <Button
            title="Novo prato"
            onClick={handleNewDish}
            className="button desktop"
          /> :
            <Clickable className="button desktop">
              <ButtonIcon text="Pedidos " price={order} order/>
            </Clickable>
          }

          <Clickable
            className="desktop" 
            onClick={handleSignOut}
          >
            <PiSignOut size={32} />
          </Clickable>
          </div>
    </Container>
  )
}