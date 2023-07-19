import { Container } from "./styles";

import { Link } from "react-router-dom";

import polygon from "../../assets/polygon.svg"
import { InputDishInfo } from "../../components/InputDishInfo";
import { Button } from "../../components/Button";

export function SignUp() {
  return (
    <Container>
      <div className="top">
        <img src={polygon} alt="logo" />
        <h1>food explorer</h1>
      </div>
      <form action="">
        <div className="input-wrapper">
            <label htmlFor="name">Seu nome</label>
            <InputDishInfo id="name" placeholder="Ex.: Maria da Silva" type="text"/>
          </div>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <InputDishInfo id="email" placeholder="exemplo@exemplo.com.br" type="email"/>
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Senha</label>
            <InputDishInfo id="password" placeholder="Mínimo 6 caracteres" type="password" minLength={6}/>
          </div>
          <Button type="submit" title="Criar conta" />
      </form>
      <Link to="/">Já tenho uma conta</Link>
    </Container>
  )
}