import { Container } from "./styles";

import { InputDishInfo } from "../../components/InputDishInfo";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";

import { FiChevronLeft, FiChevronDown, FiUpload } from "react-icons/fi";

export function New() {
  const user = {
    name: 'Bruna',
    isAdmin: 1
  };

  const isAdmin = user.isAdmin === 1

  return (
    <Container>
      <Header />
      <div className="page">
        <a href="#"> 	<FiChevronLeft size={22} /> voltar</a>
        <h1>Novo prato</h1>

        <div className="input-wrapper">
          <label htmlFor="image">Imagem do Prato</label>
          <label className="inputImage" htmlFor="image"><FiUpload size={24} /> Selecione imagem</label>
          <InputDishInfo id="image" type="file" placeholder="Selecione imagem" />
        </div>

        <div className="input-wrapper">
          <label htmlFor="name">Nome</label>
          <InputDishInfo id="name" type="text" placeholder="Ex.: Salada Ceasar" />
        </div>

        <div className="input-wrapper">
          <label htmlFor="category">Categoria</label>
          <div className="select">
            <select id="category">
              <option value="1">Refeição</option>
              <option value="1">Refeição</option>
            </select>
            <label className="arrowDown" htmlFor="category"><FiChevronDown size={24} /></label>
          </div>
        </div>

        <div className="input-wrapper">
          <label htmlFor="ingredients">Ingredientes</label>
          <InputDishInfo id="ingredients" type="text" />
        </div>

        <div className="input-wrapper">
          <label htmlFor="price">Preço</label>
          <InputDishInfo id="price" type="number" placeholder="R$00,00" />
        </div>

        <div className="input-wrapper">
          <label htmlFor="description">Descrição</label>
          <textarea id="description" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"></textarea>
        </div>

        <Button title="Salvar alterações" disabled />
      </div>
      <Footer />
    </Container>
  )
}