import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'

function NavMenu(){
    return (
        <>
            <Navbar bg="dark" fixed="sticky">
                <Container>
                    <Navbar.Brand className="text-navbar" href="/">Boose Me</Navbar.Brand>
                    {/* <Nav className="ms-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/100ui">100 UI</Nav.Link>
                        <Nav.Link href="/aboutme">About me</Nav.Link>
                    </Nav> */}
                </Container>
            </Navbar>
        </>
    );
}

export default NavMenu