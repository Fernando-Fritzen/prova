import React from 'react';
import api from '../../api';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

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

    const [contato, setContato] = useState([]);

    useEffect(() => { 

        async function buscarContatos() {
            const response = await api.get('contatos');
            console.log(response);
            setContato(response.data);

        }

        buscarContatos();
    }, [])

    return (
        <>
            <Table1>
                <thead>
                    <tr>
                        <th>E-mail</th>
                        <th>Telefone</th>
                    </tr>
                </thead>
                <tbody>

                    {contato?.map((item) => (
                        <tr key={item.id}>
                            <td>{item.email}</td>
                            <td>{item.telefone}</td>
                        </tr>
                   ))}

                </tbody>
            </Table1>
        </>
    );
}

export default Table;