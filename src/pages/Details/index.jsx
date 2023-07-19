import { Container } from "./styles";

import dishBig from "../../assets/dishBig.png";

import { FiChevronLeft, FiPlus, FiMinus } from "react-icons/fi";

import { Ingredient } from "../../components/Ingredient";
import { Header } from "../../components/Header";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";

export function Details() {
  const user = {
    name: 'Bruna',
    isAdmin: 1
  };

  const isAdmin = user.isAdmin === 1

  return (
    <Container>
      <Header />
      <div className="page">
        <a href="#"> 	<FiChevronLeft size={32} /> voltar</a>
        <img src={dishBig} alt="Imagem do prato" />
        <h1>Salada Ravanello</h1>
        <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
        <div className="ingredients">
          <Ingredient title="alface" />
          <Ingredient title="cebola" />
          <Ingredient title="pão naan" />
          <Ingredient title="pepino" />
          <Ingredient title="rabanete" />
          <Ingredient title="tomate" />
        </div>
        { isAdmin ?
          <section>
            <Button title="Editar prato" />
          </section> :
          <section>
            <div className="items">
              <button><FiMinus size={27} /></button>
              <span>01</span>
              <button><FiPlus size={27} /></button>
            </div>
            <ButtonIcon title="pedir - R$30,00" />
          </section>
        }
      </div>
      <Footer />
    </Container>
  )
}