import './App.css';
import React from 'react'
import Routes from './routes.js'
import Navbar from './components/navbar'
// bootstrap
import {Button, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Navbar /> 
      <Container fluid>
      <Routes /> 
        <Button>test button</Button>
      </Container>

    </>
  );
}

export default App;
