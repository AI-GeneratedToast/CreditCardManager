import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import './Modifier';


export default function Modifier() {

    const { id } = useParams();

    let navigate=useNavigate();

    const [carte,setCarte]=useState({
        totalLimit:0,
    });


    const{totalLimit}=carte;

    const onInputChange=(e)=>{
        setCarte({...carte,[e.target.name]:e.target.value});
        console.log(id)
        console.log(carte)
    }

    const onSubmit = async (e) =>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/updateCardLimit/${id}`, carte);
        navigate("/");
    };

  return (
    <div className='container'>
        <form onSubmit={(e)=>onSubmit(e)}>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-4 shadow'>
            <h2 className='text-center m-4'>Modifier la limite</h2>
            <div className='mb-3'>
                <label htmlFor='totalLimit' className='form-label'>Limit</label>
                <input type={"Number"} name='totalLimit' className='form-control' placeholder='Saisit la type de carte' value={totalLimit} onChange={(e)=>onInputChange(e)}/>
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
