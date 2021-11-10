import './App.css';
import styled from 'styled-components';
import Table from './components/Table';

const Container = styled.div`
  width: 100vw;
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
      <h2>Contatos</h2>

      <Table />
    </Container>
  );
}

export default App;
