import React from 'react';
import api from '../../api';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MdModeEdit, MdDelete } from "react-icons/md"
import axios from 'axios';

const Table1 = styled.table`
  
    width: 100%;
    border-spacing: 0 0.5rem;
    color: #51535c;

    th {
        background: #fff;

        font-weight: normal;
        padding: 20px;
        text-align: left;
    }

    tr {
        opacity: 0.7;
        display: flex;

        &:hover{
            opacity: 1;
        }


        td {
            background: #fff;
            padding: 20px;
        }
    }

`;



const Table = () => {

    const [show, setShow] = useState(false);
    const close = () => setShow(false);

    const [idContato, setIdContato] = useState();

    const [contato, setContato] = useState([]);


    useEffect(() => { 

        async function buscarContatos() {
            const response = await api.get('contatos');
            console.log(response);
            setContato(response.data);

        }

        buscarContatos();
    }, [])

    function apagar(t) {
        axios.delete(`http://localhost:8080/contatos/${t}`)
            .then(window.location.reload())

    } 

    return (
        <>
            <Table1>
                <thead>
                    <tr>
                        <th style={{flex:1}}>Nome</th>
                        <th style={{flex:1}}>E-mail</th>
                        <th style={{flex:1}}>Telefone</th>
                        <th style={{width:'70px'}}>Editar</th>
                        <th style={{width:'70px'}}>Apagar</th>
                    </tr>
                </thead>
                <tbody>

                    {contato?.map((item) => (
                        <tr key={item.id}>
                            <td style={{flex:1}}>{item.nome}</td>
                            <td style={{flex:1}}>{item.email}</td>
                            <td style={{flex:1}}>{item.telefone}</td>
                            <td style={{width:'70px', cursor:'pointer'}} ><MdModeEdit /></td>
                            <td style={{width:'70px', cursor:'pointer'}} onClick={() => apagar(item.id)} ><MdDelete /></td>
                        </tr>
                   ))}

                </tbody>
            </Table1>
        </>
    );
}

export default Table;