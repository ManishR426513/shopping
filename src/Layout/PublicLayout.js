import React from 'react'
import Sidebar from '../Common/Sidebar'
import Footer from '../Common/Footer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../Components/Header';

const PublicLayout = ({children}) => {
  return (
   <>
     <Container fluid>
      <Row>
        
        <Col sm={2}><Sidebar/></Col>
        <Col sm={10}>
        <Header/>
          {children}</Col>
      </Row>
      </Container>
   </>
  )
}

export default PublicLayout