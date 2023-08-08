import { Container } from "./styles";

import { Button } from "../Button";

import { FiPlus, FiMinus, FiHeart } from "react-icons/fi";
import { PiPencilSimple } from "react-icons/pi";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function Card({ data, ...rest }) {
  const { user } = useAuth();
  const isAdmin = user.isAdmin === 1;

  const [active, setActive] = useState(false);
  const [quantityOrder, setQuantityOrder] = useState(1);

  const image = `${api.defaults.baseURL}/files/${data.image}`
  
  const navigate = useNavigate();

  function handleDishDetails() {
    navigate(`/foods/${data.id}`)
  }

  function handleEditDish() {
    navigate(`/editdish/${data.id}`)
  }

  const handleFillHeart = () => {
    setActive(!active);
  }

  function handlePlusOrder() {
    setQuantityOrder(quantityOrder + 1);
  }

  function handleMinusOrder() {
    quantityOrder <= 1 ? setQuantityOrder(1) :
    setQuantityOrder(quantityOrder - 1);
  }

  return (
    <Container {...rest}>
      <img src={image} alt="Imagem do prato" />
      <h1 onClick={handleDishDetails}>{data.name} &gt;</h1>
      <p className="desktop">{data.description}</p>
      <span>R$ {data.price}</span>
      <div className="bottom">
        { isAdmin ? '' :
        <section>
          <button>
            <FiMinus
              size={24}
              onClick={handleMinusOrder}
            />
          </button>
          <p>{String(quantityOrder).padStart(2, "0")}</p>
          <button>
            <FiPlus
              size={24}
              onClick={handlePlusOrder}
            />
          </button>
        </section>
        }
        {
          isAdmin ? '' :
          <Button title="incluir" />
        }
      </div>
      <div className="iconTop">
      {
        isAdmin ?
        <PiPencilSimple
          size={28}
          onClick={handleEditDish}
        />
        : 
        <FiHeart
          size={28}
          onClick={handleFillHeart}
          fill={active ? 'white' : 'none'} />
      }
      </div>
    </Container>
  )
}