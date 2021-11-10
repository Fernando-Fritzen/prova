import './App.css';
import styled from 'styled-components';
import Table from './components/Table';

const Container = styled.div`
  width: 100vw;

  #data-table {
    width: min(85%, 1250px);
    margin: 0 auto;
    margin-top: 150px;

    h2 {
      margin-bottom: 30px;
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
  return (
    <Container>
      <Header>
        <h1>Prova</h1>
      </Header>

      <div id="data-table">

        <h2>Contatos</h2>

        <Table />
      </div>
    </Container>
  );
}

export default App;
