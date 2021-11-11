import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import api from './api';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function Edit(props) {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");

    const { id } = useParams;
    // eslint-disable-next-line no-undef
    console.log(id)

    // useEffect(() => {
    //     api.get(`/contatos/${id}`)
    //         .then((response) => {
    //             console.log(response.data)
    //         })
    // }, [])

    function handleSubmit(event) {

        const novoContato = {
            nome: nome,
            email: email,
            telefone: telefone
        }

        event.preventDefault();
        
        // axios.post('http://localhost:8080/contatos', novoContato)
        //     .then((response) => {
        //         window.location.reload();
        //     })

    }

    const handleChangeNome = (e) => {
        setNome(e.target.value);
    }
    
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    
    const handleChangeTelefone = (e) => {
        setTelefone(e.target.value);
    }




  return (
    <Container>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nome</label>
                <input name="nome" type="text" onChange={handleChangeNome} value={nome}  placeholder="Nome" required="required" />
            </div>
            <div>
                <label>Email</label>
                <input name="email" type="text" onChange={handleChangeEmail} value={email}  placeholder="Email" required="required" />
            </div>

            <div>
                <label>Telefone</label>
                <input name="telefone" type="text" onChange={handleChangeTelefone} value={telefone} placeholder="telefone" required="required" />
            </div>

            <button type="submit">Adicionar contato</button>
        </form>
    </Container>
  );
}

export default Edit;