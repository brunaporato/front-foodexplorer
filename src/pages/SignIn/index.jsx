import { Container } from "./styles";

import { Link } from "react-router-dom";

import polygon from "../../assets/polygon.svg"
import { InputDishInfo } from "../../components/InputDishInfo";
import { Button } from "../../components/Button";

export function SignIn() {
  return (
    <Container>
      <div className="top">
        <img src={polygon} alt="logo" />
        <h1>food explorer</h1>
      </div>
      <form action="">
        <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <InputDishInfo id="email" placeholder="exemplo@exemplo.com.br" type="email"/>
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Senha</label>
            <InputDishInfo id="password" placeholder="Insira sua senha" type="password"/>
          </div>
          <Button title="Entrar" />
      </form>
      <Link to="/register">Criar uma conta</Link>
    </Container>
  )
}