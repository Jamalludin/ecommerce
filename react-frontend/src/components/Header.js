import React from 'react';
import {Navbar, Nav, NavDropdown, Form, Button, Container, FormControl} from "react-bootstrap";

const Header = () => {
    return (
        <header>
            <Navbar expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href={'#home'}>
                        <strong>Warung</strong> Shop
                    </Navbar.Brand>
                </Container>
                {/*<Container>
                    <Navbar.Brand href="#home">
                        <img alt={""} src='../logo.svg'
                             height={40}
                             width={40}
                             className="d-inline-block align-top"/>
                        Warung Shop
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="mr-2"
                                    aria-label="Search"
                                />

                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>*/}
            </Navbar>
        </header>
    );
};

export default Header;
