import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
    const username = localStorage.getItem('user-nome')
    const usuarioLogado = username !== null
    const navigate = useNavigate()

    function logout() {
        localStorage.clear()
        navigate('/login')
    }

    return (
        <>
            <nav className='d-flex w-100 justify-content-center align-items-center' class="login">
                {usuarioLogado ?
                    <>
                        <div className="user text-center">{username}</div>
                        <div onClick={logout} className="user text-center" >Sair</div>
                    </>
                    :
                    <div onClick={()=>navigate('/login')} className="user text-center">Login</div>

               }
            </nav>
            <br />
        </>
    )
}

export default Header;