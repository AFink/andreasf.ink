import { connect } from "frontity";

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import Link from "@frontity/components/link";

import brandImage from "../assets/img/brand.svg";

const Navigation = ({ state }) => (
  <Navbar variant="dark" expand="lg" sticky="top" className="bg-primary">
    <Container>
      {/* <Description>{state.frontity.description}</Description>*/}
      <Link link={'/'} className="navbar-brand">
        <img
          src={brandImage}
          width="67.737"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />{' '}
        {state.frontity.title}
      </Link>
      <Navbar.Toggle aria-controls="navbar" />
      <Navbar.Collapse id="navbar">
        <Nav className="ms-auto">
          {state.theme.menu.map(([name, link]) => {
            const isCurrentPage = state.router.link === link;
            return (
              <Nav.Item key={name}  >
                <Link link={link} class={(isCurrentPage ? 'active ' : '') + 'nav-link'} aria-current={isCurrentPage ? "page" : undefined}>
                  {name}
                </Link>
              </Nav.Item>
            );
          })}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default connect(Navigation);