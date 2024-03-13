import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary d-flex justify-content-md-between">

        <div>
          <Link className="navbar-brand" to="/">Gestion carte de credit</Link>
          <button className="navbar-toggler" 
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className='mx-4 '>
          <Link className='mx-1 btn btn-outline-light' to="/supprimerParNumero">SupprimerParNumero</Link>
          <Link className='mx-1 btn btn-outline-light' to="/supprimerParClient">SupprimerParClient</Link>
          <Link className='mx-1 btn btn-outline-light' to="/ajoutercarte">Ajouter</Link>
        </div>


      </nav>

    </div>
  )
}
