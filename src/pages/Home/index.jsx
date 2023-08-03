import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Card } from "../../components/Card";

import macaronPng from "../../assets/pngegg2.png"
import { api } from "../../services/api";
import { useState, useEffect } from "react";

export function Home() {
  const [categories, setCategories] = useState([]);
  const [dish, setDish] = useState([]);
  const name = "";
  const ing = "";

  async function fetchDishes() {
    const response = await api.get(`/foods?name=${name}&ingredients=${ing}`);
    setDish(response.data);
  }

  async function fetchCategories() {
    const response = await api.get("/categories");
    setCategories(response.data);
  }

  useEffect(() => {fetchDishes()}, []);
  useEffect(() => {
    fetchCategories();
  }, [])
  
  return(
    <Container>
      <Header />
      <div className="content-wrapper">
        <div className="top">
          <img src={macaronPng} alt="Imagem de ingredientes" />
          <div className="text">
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </div>
          {
          categories.map((category, index) => (
            <section className="meal" key={index}>
              <h2>{category.name}</h2>
              <div className="cards">
              {
                dish.filter(dish => dish.category == category.name).map(dish => (
                <Card
                  key={String(dish.id)}
                  data={dish}
                />
              )
              )
                }
              </div>
            </section>
          ))
          }
      </div>
      <Footer />
    </Container>
  )
}