import React, { useEffect, useState } from 'react';
import Estrela from "../../components/LayoutComponents/estrela"
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import "../../assets/style.css"
import { avaliarPlugin, getPlugin } from '../../services/api';
import Header from '../../components/Header';

const PluginPage = () => {
  const { id } = useParams()
  const [plugin, setPlugin] = useState({})
  const [comentario, setComentario] = useState('')
  const [nota, setNota] = useState('0')
  const usuarioId = localStorage.getItem('user-id')
  const usuarioLogado = usuarioId!==null && usuarioId.trim() !== ''

  function handleAvaliarPlugin(e) {
    e.preventDefault()
    const avaliacao = {
      comentario,
      nota,
      usuarioId
    }
    avaliarPlugin(id, avaliacao)

    window.alert('Comentário enviado')
    listarPlugin()

  }
  async function listarPlugin() {
    const data = await getPlugin(id)
    setPlugin(data)
  }

  useEffect(() => {
    listarPlugin()
  }, [id])
  return (
    <div className="row vh-100 d-flex" class="black">
      <div className="col-12">

        <div className="mx-auto justify-content-center align-items-center">
          <h1>SoftMusi</h1>
        </div>
        <Header />
        <Link to={{ pathname: "/" }}>
          <h2 id="return"><i class="bi bi-arrow-left">Voltar</i>
          </h2>
        </Link>

        <br></br>

        <div class="plugin-container">
          <div className='w-50 text-white d-flex flex-column align-items-center'>
            <img src={plugin.imagem} alt={plugin.titulo} className='img-fluid' ></img>
            <div className='d-flex align-items-center my-2 gap-4'>
              <h2 className='text-white'>{plugin.titulo}</h2>
              <span className='fs-3 text-warning'>{plugin.notaGeral}
                <i class="bi bi-star-fill"></i>
              </span>
            </div>
            <span class="p-description my-2">{plugin.descricao}</span>
            <span>Link para baixar: {plugin.link}</span>
          </div>
          <div className='d-flex flex-column align-items-center w-75'>
            {usuarioLogado &&
              <form onSubmit={handleAvaliarPlugin}>
                <Estrela nota={nota} setNota={setNota} />
                <input
                  onChange={({ target }) => setComentario(target.value)}
                  className='w-75 my-2 form-control'
                  type="text" placeholder={'Comente sobre o ' + plugin.titulo} />
                <button type='submit' disabled={comentario.trim() === ''}
                  className='btn w-75 btn-info text-white my-2' >Enviar</button>
              </form>
            }
            <h4 className='my-4 text-white'>Comentários</h4>
            <div className='w-100 gap-2 d-flex flex-column justify-content-between' style={{ maxHeight: '300px', overflowY: 'scroll' }}>
              {plugin.avaliacoes?.map(avaliacao =>
                <div className='row gap-2 avaliacao align-items-center' key={avaliacao.id}>
                  <div className='d-flex col flex-column text-white'>
                    <i class="bi bi-person-fill"></i>
                    <strong>{avaliacao.usuario?.nome}</strong>
                  </div>
                  <p className='col-8  text-white-50'>{avaliacao.comentario}</p>
                  <span className='col text-warning d-flex gap-1 align-items-center'>
                    {avaliacao.nota}
                    <i class="bi bi-star-fill"></i>

                  </span>
                </div>
              )}
            </div>
          </div>
        </div>




      </div>
    </div>
  )
}

export default PluginPage;