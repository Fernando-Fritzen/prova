import './App.css';
import styled from 'styled-components';
import Table from './components/Table';
import Modal from './components/Modal';

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
      <Modal show={show} close={close} />
    </Container>
  );
}

export default App;
