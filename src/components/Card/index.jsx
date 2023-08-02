import { Container } from "./styles";

import { Button } from "../Button";

import { FiPlus, FiMinus } from "react-icons/fi";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { PiPencilSimple } from "react-icons/pi";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import { useNavigate } from "react-router-dom";

export function Card({ data, ...rest }) {
  const { user } = useAuth();
  const isAdmin = user.isAdmin === 1;

  const image = `${api.defaults.baseURL}/files/${data.image}`
  
  const navigate = useNavigate();

  function handleDishDetails() {
    navigate(`/foods/${data.id}`)
  }

  return (
    <Container {...rest}>
      <img src={image} alt="Imagem do prato" />
      <p onClick={handleDishDetails}>{data.name} &gt;</p>
      <span>R$ {data.price}</span>
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