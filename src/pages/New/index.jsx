import { Container } from "./styles";

import { Link } from "react-router-dom";

import { InputDishInfo } from "../../components/InputDishInfo";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { NewIngredient } from "../../components/NewIngredient";

import { FiChevronLeft, FiChevronDown, FiUpload } from "react-icons/fi";
import { useState } from "react";

export function New() {
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient != deleted));
  }

  return (
    <Container>
      <Header />
      <div className="page">
        <Link to="/"> 	<FiChevronLeft size={22} /> voltar</Link>
        <h1>Novo prato</h1>
        <form action="">
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
            <p>Ingredientes</p>
            <div className="ingredients">
              {
                ingredients.map((ingredient, index) => (
                  <NewIngredient
                    key={String(index)}
                    value={ingredient}
                    onClick={() => {handleRemoveIngredient(ingredient)}} 
                  />
                ))
              }
              <NewIngredient
                $isNew
                placeholder="Adicionar"
                value={newIngredient}
                onChange={e => setNewIngredient(e.target.value)}
                onClick={handleAddIngredient}
              />
            </div>
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
        </form>
      </div>
      <Footer />
    </Container>
  )
}