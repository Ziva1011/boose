import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import React from 'react'
import {useNavigate } from "react-router-dom";
import { FiLogOut } from 'react-icons/fi';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function NavMenu(){

    const history = useNavigate()
    
    const handleLogout = (e)=>{
        e.preventDefault();
        console.log("Logging out")
        sessionStorage.clear();
        history("/login")
    }

    return (
        <>
            <Navbar collapseOnSelect expand="md" className='navbar-bg-color pt-3 pb-3'>
                <Container>
                    <Navbar.Brand className="text-navbar" href="">Boose Me</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Form className="d-flex ">
                                <Form.Control
                                type="search"
                                placeholder="Search for a product"
                                className="search-bar me-auto ms-auto"
                                aria-label="Search"
                                />
                            </Form>
                        <Nav className="ms-auto ">
                            <Nav.Link   onClickCapture={handleLogout} className="text-navbar todays-deals me-2 ps-2" >Today's Deals %</Nav.Link>
                            
                            {sessionStorage.length>0 && 
                            <><NavDropdown className="text-navbar me-2 ps-2" title="My account" id="basic-nav-dropdown">
                            <NavDropdown.Item href="">My account</NavDropdown.Item>
                            <NavDropdown.Item href="" >My purchases</NavDropdown.Item>
                            <NavDropdown.Item href="" >Settings</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link   onClickCapture={handleLogout} className="text-navbar ps-2" >Logout <FiLogOut/></Nav.Link>
                        </>}
                        </Nav> 
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavMenu