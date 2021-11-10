import React from 'react';
import api from '../../api';
import { useState, useEffect } from 'react';


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
            <table>
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
            </table>
        </>
    );
}

export default Table;