import { Container } from "./styles";

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
        <PiX size={23}/>
        <h3>Menu</h3>
      </div>
      <Input placeholder="Busque por pratos ou ingredientes"/>
      <ul>
        <li>
          { isAdmin ?
          <a>
            Novo prato
          </a> : ''
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