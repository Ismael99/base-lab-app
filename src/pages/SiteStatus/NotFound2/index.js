import React from 'react'
import { Link } from '@reach/router'
import './index.css'
export const NotFound2 = () => {
  return (
    <div className="body">
      <nav class="shelf">
        <Link to="/dashboard" className="book home-page">
          Pagina de Inicio
        </Link>
        <Link to="../" className="book about-us">
          Regresar
        </Link>
        <Link to="/" className="book contact">
          Registrarse
        </Link>
        <span className="book not-found"></span>
        <span className="door left"></span>
        <span className="door right"></span>
      </nav>
      <h1>Error 404</h1>
      <p>The page you're loking for can't be found</p>
    </div>
  )
}
