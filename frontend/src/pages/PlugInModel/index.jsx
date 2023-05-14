import React from 'react';
import Estrela from "../../components/LayoutComponents/estrela"
import { useLocation, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
//import "../assets/style.css";
import "../../assets/style.css"

const PluginPage = () => {

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  //const pID = params.get('pID');
  const titulo = params.get('titulo');
  const descricao = params.get('descricao');
  const imagem = params.get('imagem');

  return(
  <div className="row vh-100 d-flex" class="black">
    <div className="col-12">

      <div className="mx-auto justify-content-center align-items-center">
        <h1>SoftMusi</h1>
      </div>

      <hr></hr>

      <nav className='w-100 justify-content-center align-items-center' class="login">
        <Link to={{ pathname: '/login'}}>
          <button type="button" className="btn btn-lg btn-block" class ="user">User</button>
          <button type="button" className="btn btn-lg btn-block" class ="user">Sign out</button>
        </Link>
      </nav>

      <hr></hr>

      <Link to={{pathname:"/" }}>
          <h2 id="return">&#10149;Return to Homepage</h2>
      </Link>

      <br></br>

      <div class="p-card-1">
        <img src= {imagem} alt= {titulo} className='img-fluid' ></img>
        <h2>{titulo}</h2>
        
        <p class="p-description">{descricao}</p>

        <Estrela />

      </div>

      
      <footer class="footer">
        <p class="footer-text">SoftMusi Copyright © 2023</p>
      </footer>

    </div>
  </div>
  )
}

export default PluginPage;