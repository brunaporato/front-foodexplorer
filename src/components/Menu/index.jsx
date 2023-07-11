import { Input } from "../Input";
import { Container } from "./styles";

import { PiX } from "react-icons/pi";

export function Menu() {
  const user = {
    name: 'Bruna',
    isAdmin: 1
  }

  const isAdmin = user.isAdmin === 1

  return (
    <Container>
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
    </Container>
  )
}