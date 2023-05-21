import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";

import logoIMG from "../../assets/logo.svg";
import { LayoutComponents } from "../../components/LayoutComponents";
import { login } from "../../services/api";

export const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function logar(e){
    e.preventDefault()
    try {
     const user =  await login(email,password)
      localStorage.setItem('user-email',user.email)
      localStorage.setItem('user-nome',user.nome)
      localStorage.setItem('user-id',user.id)
      alert('Bem vindo')
      navigate('/')
    } catch (error) {
      alert('Email ou senha incorretos')
      
    }
  }
  return (
    <LayoutComponents>
      <form onSubmit={logar} className="login-form">
        <span className="login-form-title"> Acesse sua conta </span>

        <span className="login-form-title">
          <img src={logoIMG} alt="Project SoundMusi" />
        </span>

        <div className="wrap-input">
          <input
            className={email !== "" ? "has-val input" : "input"}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Email"></span>
        </div>

        <div className="wrap-input">
          <input
            className={password !== "" ? "has-val input" : "input"}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Senha"></span>
        </div>

        <div className="container-login-form-btn">
          <button type="submit" className="login-form-btn">Login</button>
        </div>

        <div className="text-center">
          <span className="txt1">Não possui conta? </span>
          <Link className="txt2" to="/register">
            Criar conta.
          </Link>
        </div>
      </form>
    </LayoutComponents>
  );
};