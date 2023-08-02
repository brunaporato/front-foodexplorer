import { Container } from "./styles";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { PiX } from "react-icons/pi";
import { Input } from "../../components/Input";
import { Footer } from "../../components/Footer";

import { useAuth } from "../../hooks/auth";

export function Menu() {
  const [search, setSearch] = useState("");
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  const isAdmin = user.isAdmin === 1;

  function handleSignOut() {
    navigate("/")
    signOut()
  }

  function handleSearch(e) {
    if(e.key === 'Enter') {
      setSearch(e.target.value)
    }
  }

  
  return(
    <Container>
     <div className="menu">
     <div className="top">
        <Link to="/"><PiX size={23}/></Link>
        <h3>Menu</h3>
      </div>
      <Input
        placeholder="Busque por pratos ou ingredientes"
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
          <a onClick={handleSignOut}>
            Sair
          </a>
       </li>
      </ul>
     </div>
      <Footer className="footer" />
    </Container>
  )
}