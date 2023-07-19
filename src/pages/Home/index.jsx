import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Card } from "../../components/Card";

import macaronPng from "../../assets/pngegg2.png"

export function Home() {
  
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
              <Card />
              <Card />
              <Card />
            </div>
          </section>
          <section className="meal">
            <h2>Pratos principais</h2>
            <div className="cards">
              <Card />
              <Card />
              <Card />
            </div>
          </section>
      </div>
      <Footer />
    </Container>
  )
}