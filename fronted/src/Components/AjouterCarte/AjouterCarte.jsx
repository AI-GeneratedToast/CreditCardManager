import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './AjouterCarte.css';


export default function AjouterCarte() {

    let navigate=useNavigate();

    const [carte,setCarte]=useState({
        cardNumber: "",
        amountUsed:0,
        availableAmount:0,
        cardType:"",
        totalLimit:0,
        customerId:0,
    });

    const{cardNumber,amountUsed,availableAmount,cardType,totalLimit,customerId}=carte;

    const onInputChange=(e)=>{
        setCarte({...carte,[e.target.name]:e.target.value});
    }

    const onSubmit = async (e) =>{
        e.preventDefault();
        await axios.post("http://localhost:8080/newCard",carte)
        navigate("/")
    };

  return (
    <div className='container'>
        <form onSubmit={(e)=>onSubmit(e)}>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-4 shadow'>
            <h2 className='text-center m-4'>Ajoute une carte</h2>
            <div className='mb-3'>
                <label htmlFor='cardNumber' className='form-label'>Numero de la carte</label>
                <input type={"text"} name='cardNumber' className='form-control' placeholder='Saisit un numero' value={cardNumber} onChange={(e)=>onInputChange(e)}/>
            </div>
            <div className='mb-3'>
                <label htmlFor='amountUsed' className='form-label'>Quantité dépensée</label>
                <input type={"Number"} name='amountUsed' className='form-control' placeholder='Saisit une Quantité' value={amountUsed}  onChange={(e)=>onInputChange(e)}/>
            </div>
            <div className='mb-3'>
                <label htmlFor='availableAmount' className='form-label'>Quantité disponible</label>
                <input type={"Number"} name='availableAmount' className='form-control' placeholder='Saisit une Quantité' value={availableAmount} onChange={(e)=>onInputChange(e)}/>
            </div>
            <div className='mb-3'>
                <label htmlFor='cardType' className='form-label'>Type</label>
                <input type={"text"} name='cardType' className='form-control' placeholder='Saisit la type de carte' value={cardType} onChange={(e)=>onInputChange(e)}/>
            </div>
            <div className='mb-3'>
                <label htmlFor='totalLimit' className='form-label'>Limit</label>
                <input type={"Number"} name='totalLimit' className='form-control' placeholder='Saisit la type de carte' value={totalLimit} onChange={(e)=>onInputChange(e)}/>
            </div>
            <div className='mb-3'>
                <label htmlFor='customerId' className='form-label'>Idclient</label>
                <input type={"Number"} name='customerId' className='form-control' placeholder='Saisit la type de carte' value={customerId} onChange={(e)=>onInputChange(e)}/>
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
