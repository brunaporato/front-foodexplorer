import { Container } from "./styles";

import Dish from "../../assets/Dish.png";
import { Button } from "../Button";

import { FiPlus, FiMinus } from "react-icons/fi";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { PiPencilSimple } from "react-icons/pi";

export function Card() {

  const user = {
    name: 'Bruna',
    isAdmin: 2
  }

  const isAdmin = user.isAdmin === 1


  return (
    <Container>
      <img src={Dish} alt="Imagem do prato" />
      <p>Suco de maracujá &gt;</p>
      <span>R$ 13,97</span>
      { isAdmin ? '' :
      <section>
        <button><FiMinus size={24} /></button>
        <p>01</p>
        <button><FiPlus size={24} /></button>
      </section>
      }
      {
        isAdmin ? '' :
        <Button title="incluir" />
      }
      <div className="iconTop">
      {
        isAdmin ? <PiPencilSimple size={28} />
        : 
        <BsSuitHeart size={28} />
      }
      </div>
    </Container>
  )
}