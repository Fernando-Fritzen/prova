import './App.css';
import styled from 'styled-components';
import Table from './components/Table';
import Modal from './components/Modal';
import axios from 'axios';

import { useState } from 'react';

const Container = styled.div`
  width: 100vw;

  #data-table {
    width: min(85%, 1250px);
    margin: 0 auto;
    margin-top: 150px;
    position: relative;

    h2 {
      margin-bottom: 30px;
    }

    button {
      position: absolute;
      right: 0;
      top: 0;
      padding: 15px;
      background: #2d4a22;
      color: #FFF;
      border: none;
      border-radius: 8px;
    }
  }

  form {
    margin: 0 auto;
    margin-top: 40px;
  }
`;

const Header = styled.header`
  width: 100%;
  height: 80px;
  background-color: #2d4a22;

  h1 {
    color: #fff;
    font-weight: 100;
  }
`;


function App() {

  const [show, setShow] = useState(false);
  const close = () => setShow(false);

    const [id, setId] = useState();
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
        
        axios.put(`http://localhost:8080/contatos/${id}`, novoContato)
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
    <Container>
      <Header>
        <h1>Prova</h1>
      </Header>

      <div id="data-table">

        <h2>Contatos</h2>
        <button onClick={() => setShow(true)}>Cadastrar novo contato</button>

        <Table />
      </div>

      <form onSubmit={handleSubmit}>
        <h2>Informe um id e edite os dados</h2>
        <input type="number" placeholder="Id" onChange={value => setId(value.target.value)} value={id} />
        <input type="text" placeholder="Nome" onChange={handleChangeNome} value={nome} />
        <input type="text" placeholder="Email" onChange={handleChangeEmail} value={email} />
        <input type="text" placeholder="Telefone" onChange={handleChangeTelefone} value={telefone} />
        <button>Editar</button>
      </form>
      <Modal show={show} close={close} />
    </Container>
  );
}

export default App;
