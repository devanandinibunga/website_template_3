import React from 'react';
import { funeralcontext } from '../FuneralDataContext/FuneralDataContext';
import './FuneralHeader.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

export const FuneralHeader = () => {


  return (
        <Navbar className='funeral-header-container' collapseOnSelect expand="lg" fixed='top' variant="dark">
        <Container>
        <Navbar.Brand href="#home"><img src="https://wporganic.com/funeral-service/wp-content/uploads/2016/04/logo.png" alt="header-logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <funeralcontext.Consumer>  
          {({funeralHeaderData})=>{
            return(
              <>
              {funeralHeaderData.map((eachLink,i)=>
                <Nav key={i} className="ms-auto">
                    <Nav.Link className='funeral-header-each-nav-link' href="#features">{eachLink.name}</Nav.Link>
                </Nav>
              )}
              </>
            )
          }} 
            
        </funeralcontext.Consumer> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

