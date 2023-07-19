import { Container } from "./styles";

import { Link } from "react-router-dom";

import { PiX } from "react-icons/pi";
import { Input } from "../../components/Input";
import { Footer } from "../../components/Footer";

export function Menu() {
  const user = {
    name: 'Bruna',
    isAdmin: 1
  }

  const isAdmin = user.isAdmin === 1;
  
  return(
    <Container>
     <div className="menu">
     <div className="top">
        <Link to="/"><PiX size={23}/></Link>
        <h3>Menu</h3>
      </div>
      <Input placeholder="Busque por pratos ou ingredientes"/>
      <ul>
        <li>
          { isAdmin ?
          <Link to="/new">
            Novo prato
          </Link> : ''
          }
        </li>
        <li>
          <a>
            Sair
          </a>
       </li>
      </ul>
     </div>
      <Footer className="footer" />
    </Container>
  )
}