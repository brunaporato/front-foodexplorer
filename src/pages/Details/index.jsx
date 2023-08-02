import { Container } from "./styles";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { FiChevronLeft, FiPlus, FiMinus } from "react-icons/fi";

import { Ingredient } from "../../components/Ingredient";
import { Header } from "../../components/Header";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

export function Details() {
  const [data, setData] = useState([]);

  const { user } = useAuth();
  const isAdmin = user.isAdmin === 1

  const params = useParams();

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/foods/${params.id}`);
      setData(response.data);
    }
    fetchDish();
  }, [params.id]);
  
  const image = `${api.defaults.baseURL}/files/${data.image}`

  return (
    <Container>
      <Header />
      <div className="page">
        <a href="/"> 	<FiChevronLeft size={32} /> voltar</a>
        <img src={image} alt="Imagem do prato" />
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        {data.ingredients &&
          <div className="ingredients">
            { data.ingredients.map(ingredient => (
              <Ingredient
               key={String(ingredient.id)}
               title={ingredient.name}
              />
            ))
            }
          </div>
        }
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