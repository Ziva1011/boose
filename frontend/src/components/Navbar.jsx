import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import React,{useEffect, useState} from 'react'
import { Link,useNavigate } from "react-router-dom";
import { FiLogOut } from 'react-icons/fi';

function NavMenu(){

    const history = useNavigate()
    
    const handleLogout = (e)=>{
        e.preventDefault();
        console.log("handler")
        sessionStorage.clear();
        console.log(sessionStorage)
        history("/login")
        //return <Link to="/login" />

        // axios.get("http://localhost:3000/logout")
        // .then(res=>{
        //     if (res.status==200){
        //         //setLoginUser(res.data.name)
        //         console.log("sucess") 
        //         console.log(res)
        //         sessionStorage.clear();
        //         return <Link to="/login" />
        //     }
        // })
        // .catch(function (error) {
        //     console.log(error);  
        //     sessionStorage.clear();
        //     return <Link to="/login" />
        // });
    }

    return (
        <>
            <Navbar className='navbar-bg-color'>
                <Container>
                    <Navbar.Brand className="text-navbar" href="">Boose Me</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link  className="text-navbar" onClickCapture={handleLogout}>Logout <FiLogOut/></Nav.Link>
                    </Nav> 
                </Container>
            </Navbar>
        </>
    );
}

export default NavMenu