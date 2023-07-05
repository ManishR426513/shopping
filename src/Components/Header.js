import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>

        <Navbar bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="#home"><img src="https://w7.pngwing.com/pngs/537/188/png-transparent-mandala-logo-islamic-banking-and-finance-geometric-symmetry-monochrome-bank-thumbnail.png" height="75px" width="75px"  /></Navbar.Brand>
          <Nav className="ml-auto">
            <Link to="/"> <a style={{marginRight:"10px"}}> Home</a></Link>
            <Link to="/"><a style={{marginRight:"10px"}}>Category</a></Link>
            <Link to="/"><a style={{marginRight:"10px"}}></a></Link>
           
          </Nav>
        </Container>
      </Navbar>
      <br/><br/>  
     
    </>
  )
}

export default Header