import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`

    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(0,0,0,.7);
    top: 0;
    align-items: center;
    overflow: hidden;
    z-index: 99;

    #modal {
        
        width: 550px;
        height: 600px;
        margin: 0 auto;
        background: #FFF;
        padding: 30px;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 10px;
        border: 2px solid #2d4a22;
    }

    #fechar {
        position: absolute;
        top: 0;
        right: 15px;
        font-size: 35px;
        transform: rotate(45deg);
        cursor: pointer;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;

        div {
            display: flex;
            flex-direction: column;
            width: 80%;
            margin-top: 45px;

            input {
                width: 100%;
                padding: 10px;
                margin-top: 5px;
            }
        }

        button {
            width: 80%;
            margin-top: 40px;
            padding: 15px;
            background: #2d4a22;
            color: #FFF;
            border: none;
            border-radius: 8px;
        }
    }

`;

function Modal({ show, close }) {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");

    function handleSubmit(event) {
        const novoContato = {
            nome: nome,
            email: email,
            telefone: telefone
        }

        event.preventDefault();
        
        axios.post('http://localhost:8080/contatos', novoContato)
            .then((response) => {
                window.location.reload();
            })

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
      <Container style={{
          display: show ? 'block' : 'none'
      }}>
          <div id="modal">
              <div id="fechar" onClick={close}>+</div>

              <form onSubmit={handleSubmit}>

                  <div>
                      <label>Nome</label>
                      <input name="nome" type="text" onChange={handleChangeNome} value={nome}  placeholder="Email" required="required" />
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
          </div>
      </Container>
  );
}

export default Modal;