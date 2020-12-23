import './App.css';
import React from 'react'
import Routes from './routes.js'
import Navbar from './components/navbar'
// bootstrap
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Navbar /> 
      <Container fluid>
        <Routes /> 
      </Container>

    </>
  );
}

export default App;
