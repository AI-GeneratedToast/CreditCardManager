import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function ListeParCategorie() {

    const {cat} = useParams();

    const [carte,setCarte] = useState([]);

    useEffect(()=> {
        chargerCartes()
    },[]);

    async function chargerCartes() {
        const result = await axios.get(`http://localhost:8080/cardsByType/${cat}`);
        setCarte(result.data);
    }

    return (
        <div className='container'>
            <div className='py-4'>
            <div className='mb-4 d-flex d-flex justify-content-end'>
            <DropdownButton id="dropdown-basic-button" title="Affiche Par Type">
                <Dropdown.Item as={Link} to={"listerParCat/visa"}>Visa</Dropdown.Item>
                <Dropdown.Item as={Link} to={"listerParCat/mastercard"}>MasterCard</Dropdown.Item>
                <Dropdown.Item as={Link} to={"listerParCat/credit"}>Credit</Dropdown.Item>
                <Dropdown.Item as={Link} to={"/"}>All</Dropdown.Item>
            </DropdownButton>
    
            </div>
                <table class="table border shadow">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">id</th>
                        <th scope="col">Quantité dépensée</th>
                        <th scope="col">Quantité disponible</th>
                        <th scope="col">Limite</th>
                        <th scope="col">Numero</th>
                        <th scope="col">Type</th>
                        <th scope="col">Création</th>
                        <th scope="col">NumClient</th>
                        <th scope="col">Gestion</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {
                        carte.map((carte,i)=>(
                            <tr>
                                <th scope="col" key={i}>{i+1}</th>
                                <td scope="col">{carte.cardId}</td>
                                <td scope="col">{carte.amountUsed}$</td>
                                <td scope="col">{carte.availableAmount}$</td>
                                <td scope="col">{carte.totalLimit}$</td>
                                <td scope="col">{carte.cardNumber}</td>
                                <td scope="col">{carte.cardType}</td>
                                <td scope="col">{carte.createDt}</td>
                                <td scope="col">{carte.customerId}</td>
    
                                
                                <td>
                                    <Link className="btn btn-primary mx-2" to={"/modifier/"+carte.cardId}>Edit</Link>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
      )
}
