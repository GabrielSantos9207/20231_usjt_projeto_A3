import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import { LayoutComponents } from "../../components/LayoutComponents"

import logoIMG from '../../assets/logo.svg'
import { cadastro } from "../../services/api";


export const Register = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("")

  async function cadastrar(e){
    e.preventDefault()
    try {
      await cadastro(name,email,password)
      alert('Você está cadastrado')
      navigate('/login')
    } catch (error) {
      alert(`Email: ${email} já está sendo usado`)
    }
    
  }

  return (
    <LayoutComponents >
      <form onSubmit={cadastrar} className="login-form">
        <span className="login-form-title"> Criar Conta </span>

        <span className="login-form-title">
          <img src={logoIMG} alt="Project SoundMusi" />
        </span>

        <div className="wrap-input">
          <input
            className={name !== "" ? "has-val input" : "input"}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Nome"></span>
        </div>

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
          <button type="submit" className="login-form-btn">Criar conta</button>
        </div>

        <div className="text-center">
          <span className="txt1">Já possui conta? </span>
          <Link className="txt2" to="/login">
            Acessar com Email e Senha.
          </Link>
        </div>
      </form>
    </LayoutComponents>
  )
}