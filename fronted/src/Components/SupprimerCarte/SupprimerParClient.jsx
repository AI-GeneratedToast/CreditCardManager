import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function SupprimerParNumero() {

    let navigate=useNavigate();

    const [carte,setCarte]=useState({
        customer_id: "",
    });

    const{customer_id}=carte;

    const onInputChange=(e)=>{
        setCarte({...carte,[e.target.name]:e.target.value});
        console.log(carte);
    }

    const onSubmit = async (e) =>{
        e.preventDefault();
        await axios.delete(`http://localhost:8080/deleteCardsByCustomerId/${carte.customer_id}`);
        navigate("/")
    };

  return (
    <div className='container'>
        <form onSubmit={(e)=>onSubmit(e)}>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-4 shadow'>
            <h2 className='text-center m-4'>Supprimer par le numero du client</h2>
            <div className='mb-3'>
                <label htmlFor='customer_id' className='form-label'>Numero du client</label>
                <input type={"text"} name='customer_id' className='form-control' placeholder='Saisit un numero' value={customer_id} onChange={(e)=>onInputChange(e)}/>
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