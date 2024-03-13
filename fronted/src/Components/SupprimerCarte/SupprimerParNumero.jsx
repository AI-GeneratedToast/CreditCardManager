import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Home from '../Lister/Home';


export default function SupprimerParNumero() {

    let navigate=useNavigate();

    const [carte,setCarte]=useState({
        cardNumber: "",
    });

    const{cardNumber}=carte;

    const onInputChange=(e)=>{
        setCarte({...carte,[e.target.name]:e.target.value});
        console.log(carte);
    }

    const onSubmit = async (e) =>{
        e.preventDefault();
        await axios.delete(`http://localhost:8080/deleteCardByNumber/${carte.cardNumber}`);
        navigate("/")
    };

  return (
    <div className='container'>
        <form onSubmit={(e)=>onSubmit(e)}>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-4 shadow'>
            <h2 className='text-center m-4'>Supprimer par le numero</h2>
            <div className='mb-3'>
                <label htmlFor='cardNumber' className='form-label'>Numero de la carte</label>
                <input type={"text"} name='cardNumber' className='form-control' placeholder='Saisit un numero' value={cardNumber} onChange={(e)=>onInputChange(e)}/>
            </div>
            <button type='submit' className='btn btn-outline-primary'>Submit</button>

            <Link className="navbar-brand mx-2" to="/">
                <button className='btn btn-outline-danger'>Annuler</button>
            </Link>
        </div>
        </form>
    </div>
  )
}
