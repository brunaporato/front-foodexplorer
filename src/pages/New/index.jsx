import { Container } from "./styles";

import { Link, useNavigate } from "react-router-dom";

import { InputDishInfo } from "../../components/InputDishInfo";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { NewIngredient } from "../../components/NewIngredient";

import { FiChevronLeft, FiChevronDown, FiUpload } from "react-icons/fi";
import { useState } from "react";
import { api } from "../../services/api";

export function New() {
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const navigate = useNavigate();
  let response;

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient != deleted));
  }

  async function handleImage(e) {
    const file = e.target.files[0];
    setImage(file);

    const fileUploadForm = new FormData();
    fileUploadForm.append("image", file);

    response = await api.patch("/foodimage", fileUploadForm);
  }

  async function handleNewDish() {
    // return console.log(image)

    try {
      await api.post("/foods", {
        name,
        category,
        price,
        description,
        ingredients,
        image: response.data.image
      });

      alert("Prato criado com sucesso");
      navigate("/");
    } catch(error) {
      if(error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível cadastrar este prato")
      }
    }

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
            <InputDishInfo
              id="image"
              type="file"
              placeholder="Selecione imagem"
              onChange={handleImage}
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="name">Nome</label>
            <InputDishInfo
              id="name"
              type="text"
              placeholder="Ex.: Salada Ceasar"
              onChange={e => setName(e.target.value)}
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="category">Categoria</label>
            <div className="select">
              <select
                id="category"
                onChange={e => setCategory(e.target.value)}
              >
                <option value=""></option>
                <option value="Refeição">Refeição</option>
                <option value="Snack">Snack</option>
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
            <InputDishInfo
              id="price"
              type="number"
              placeholder="R$00,00"
              onChange={e => setPrice(e.target.value)}
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={e => setDescription(e.target.value)}
            />
          </div>

          <Button
            title="Salvar alterações"
            onClick={handleNewDish}
          />
        </form>
      </div>
      <Footer />
    </Container>
  )
}