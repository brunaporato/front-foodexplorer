import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Card } from "../../components/Card";

import macaronPng from "../../assets/pngegg2.png"
import { api } from "../../services/api";
import { useState, useEffect } from "react";

export function Home() {
  const [dish, setDish] = useState([]);
  const name = "";
  const ing = "";

  async function fetchDishes() {
    const response = await api.get(`/foods?name=${name}&ingredients=${ing}`);
    setDish(response.data);
  }

  useEffect(() => {fetchDishes()}, [])
  
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
          <section className="meal">
            <h2>Refeições</h2>
            <div className="cards">
             { dish.map(dish => (
               <Card
                key={String(dish.id)}
                data={dish}
               />
             ))
              }
            </div>
          </section>
          <section className="meal">
            <h2>Pratos principais</h2>
            <div className="cards">
            </div>
          </section>
      </div>
      <Footer />
    </Container>
  )
}