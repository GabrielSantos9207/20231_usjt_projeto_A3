import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../assets/style.css"
import { getPlugins } from '../../services/api';
import Header from '../../components/Header';

function Homepage() {
  const [plugins, setPlugins] = useState([])
  const navigate = useNavigate()
  const username = localStorage.getItem('user-nome')
  const multiComp = {
    pluginId: 1,
    titulo: "C6 Multiband Compressor",
    descricao: 'C6 is ideal for serious audio surgery on individual tracks and masters. Its extreme flexibility comes from 4 configurable frequency bands—and 2 additional “floating” frequency bands—that let you apply per-band compression, expansion, upward expansion, limiting, and dynamic EQ.   \nThis refined blend of dynamics processing and EQ is optimized to shape any audio with a wide frequency range—masters, drums, synthesizers, heavy guitar, piano, and more.',
    imagem: "../../assets/c6-multiband-compressor.avif"
  }

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
          <p class="description">
            Bem-vindo ao nosso site de avaliação de plugins VST! Com tantas opções disponíveis, pode ser difícil saber quais plugins VST realmente valem a pena investir, é aqui que nós entramos. Nosso site é dedicado para que os usúarios possam contribuir com suas próprias avaliações sobre os plugins que usaram. Se você é um produtor musical que procura os melhores plugins VST para aprimorar sua produção, explore nosso site e compartilhe suas opiniões. Juntos, podemos ajudar a criar uma comunidade mais informada e capacitada de criadores musicais.</p>
        </div>

        <br></br>

        <h2 id="vst-title">VST Plugins:</h2>
        <div class="plugins">
          {plugins.map(plugin =>
            <div onClick={() => navigate(`/plugin/${plugin.id}`)} key={plugin.id} className="p-card-1">
              <img className='p-img' src={plugin.imagem} />
              <h3>{plugin.titulo}</h3>
              <span>{plugin.descricao}</span>
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