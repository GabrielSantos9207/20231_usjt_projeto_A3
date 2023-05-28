import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../assets/style.css"
import { getPlugins } from '../../services/api';
import Header from '../../components/Header';

function Homepage() {
  const [plugins, setPlugins] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    async function listarPlugins() {
      const data = await getPlugins()
      setPlugins(data)
    }
    listarPlugins()
  }, [])

  return (
    <div className="row vh-100 d-flex" class="black">
      <div className="col-12">

        <div className="mx-auto justify-content-center align-items-center">
          <h1>SoftMusi</h1>
        </div>

        <Header />
        <div class="p-card-d">
          <p class="description fs-5">
            Bem-vindo ao nosso site de avaliação de plugins VST! Com tantas opções disponíveis, pode ser difícil saber quais plugins VST realmente valem a pena investir, é aqui que nós entramos. Nosso site é dedicado para que os usúarios possam contribuir com suas próprias avaliações sobre os plugins que usaram. Se você é um produtor musical que procura os melhores plugins VST para aprimorar sua produção, explore nosso site e compartilhe suas opiniões. Juntos, podemos ajudar a criar uma comunidade mais informada e capacitada de criadores musicais.</p>
        </div>

        <br></br>

        <h2 id="vst-title">VST Plugins:</h2>
        <div class="plugins">
          {plugins.map(plugin =>
            <div onClick={() => navigate(`/plugin/${plugin.id}`)} key={plugin.id} className="p-card-1">
              <img className='p-img' src={plugin.imagem} />
              <h3 className='mt-2 font-weight-bold'>{plugin.titulo}</h3>
              <span className='text-light'>{plugin.descricao}</span>
            </div>

          )}
        </div>

        <hr></hr>

        <footer class="footer">
          <p class="footer-text">SoftMusi Copyright © 2023</p>
        </footer>

      </div>
    </div>
  )
}

export default Homepage;