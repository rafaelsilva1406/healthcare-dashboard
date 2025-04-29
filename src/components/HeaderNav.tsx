import React from 'react';
import TestLogo from '../assets/TestLogo.svg?react';
import Home from '../assets/home.svg?react';
import Group from '../assets/group.svg?react';
import Calendar from '../assets/calendar.svg?react';
import Chat from '../assets/chat.svg?react';
import CreditCard from '../assets/CreditCard.svg?react';
import Settings from '../assets/settings.svg?react';
import More from '../assets/MoreVert.svg?react';
import DrJoseSimmons from '../assets/DrJoseSimmons.png';
import { Container, Row, Col, Stack, Navbar, Nav, Image} from 'react-bootstrap';

const HeaderNav: React.FC = () => {
    return(
        <div className="header">
            <Navbar className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#"><TestLogo className="d-inline-block align-top"
              alt="React Bootstrap logo"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href=""><Home /> Overview</Nav.Link>
                            <Nav.Link href="#"><Group /> Patients</Nav.Link>
                            <Nav.Link href=""><Calendar /> Schedule</Nav.Link>
                            <Nav.Link href=""><Chat /> Message</Nav.Link>
                            <Nav.Link href=""><CreditCard />Transactions</Nav.Link>
                        </Nav>
                        <Stack direction="horizontal" gap={3}>
                            <div className="p-2"><Image src={DrJoseSimmons} roundedCircle /> Dr. Jose Simmons <br /> <span>General Practitioner</span></div>
                            <div className="vr"></div>
                            <div className="p-2"><Settings />  <More /></div>
                        </Stack>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default HeaderNav;