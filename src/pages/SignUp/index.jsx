import { Container } from "./styles";

import { api } from "../../services/api";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import polygon from "../../assets/polygon.svg"
import { InputDishInfo } from "../../components/InputDishInfo";
import { Button } from "../../components/Button";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if(!name || !email || !password) {
     return alert("Preencha todos os campos");
    }

    api.post("/users", { name, email, password })
    .then(() => {
      alert("Usuário cadastrado com sucesso");
      navigate("/");
    })
    .catch(error => {
      if(error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível cadastrar")
      }
    });
  }

  return (
    <Container>
      <div className="top">
        <img src={polygon} alt="logo" />
        <h1>food explorer</h1>
      </div>
      <form action="">
        <h2>Crie sua conta</h2>
        <div className="input-wrapper">
            <label htmlFor="name">Seu nome</label>
            <InputDishInfo
              id="name"
              placeholder="Ex.: Maria da Silva"
              type="text"
              onChange={e => setName(e.target.value)}
            />
          </div>
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
              placeholder="Mínimo 6 caracteres"
              type="password"
              minLength={6}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <Button type="button" title="Criar conta" onClick={handleSignUp} />
          <Link to="/">Já tenho uma conta</Link>
      </form>
    </Container>
  )
}