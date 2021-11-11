import styled from "styled-components";
import axios from "axios";
import { useState } from "react";

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
        height: 400px;
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

        div {
            display: flex;
            flex-direction: column;
            width: 80%;
            margin: 0 auto;
            margin-top: 20px;

            input {
                padding: 10px;
                margin-top: 5px;
                width: 100%;
            }
        }

        button {
            position: relative !important;
            margin: 0 auto !important;
            margin-top: 20px;
            background: #2d4a22;
            color: #FFF;
            border: none;
            border-radius: 8px;
        }
    }

`;

function ModalEdit({ show, close, idContato }) {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");

    function handleSubmit(event) {
        console.log(idContato)
        // const novoContato = {
        //     nome: nome,
        //     email: email,
        //     telefone: telefone
        // }

        // event.preventDefault();
        
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

                  <button type="submit">Editar contato</button>
              </form>
          </div>
      </Container>
  );
}

export default ModalEdit;