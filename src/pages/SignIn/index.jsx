import { Container } from "./styles";

import { useAuth } from "../../hooks/auth";

import { Link } from "react-router-dom";

import polygon from "../../assets/polygon.svg"
import { InputDishInfo } from "../../components/InputDishInfo";
import { Button } from "../../components/Button";
import { useState } from "react";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <div className="top">
        <img src={polygon} alt="logo" />
        <h1>food explorer</h1>
      </div>
      <form action="">
        <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <InputDishInfo
              id="email"
              placeholder="exemplo@exemplo.com.br"
              type="email"
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Senha</label>
            <InputDishInfo
              id="password"
              placeholder="Insira sua senha"
              type="password"
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <Button title="Entrar" onClick={handleSignIn}/>
      </form>
      <Link to="/register">Criar uma conta</Link>
    </Container>
  )
}