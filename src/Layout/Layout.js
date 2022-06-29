import React, { useEffect, useState } from 'react';
import '../Page/layout.css';
import { Link, Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container, Row, Col, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import BadgeAvatars from '../Components/Atom/Avatar';

const Layout = () => {
  const [cat, setCat] = useState(null);
  useEffect(() => {
    let url = 'https://fakestoreapi.com/products/categories';
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCat(data);
      });
  }, []);
  let myList = [];
  if (cat != null) {
    myList = cat.map((item, index) => (
      <Nav.Link as={NavLink} to={'products/category/' + item}>
        {item}
      </Nav.Link>
    ));
  }

  return (
    <div>
      <Row>
        <Col sm={12}>
          <div>
            <img src={'<img src={\'\'} alt=""/>\n'} alt="" />
          </div>
          <Navbar
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
            style={{
              width: '100%',
              position: 'fixed',
              overflow: 'hidden',
              zIndex: 1040,
              top: 0,
              justifyContent: 'space-evenly',
            }}
          >
            <Nav>
              <Nav.Link as={NavLink} to="/" exact>
                Home
              </Nav.Link>

              <Nav.Link as={NavLink} to="/new">
                New
              </Nav.Link>
              <Nav.Link as={NavLink} to="/" exact>
                Products
              </Nav.Link>
              {myList}
              <Nav.Link as={NavLink} to="/contact">
                Contact
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about" exact>
                About
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="text"
                className="form-control"
                size="50"
                placeholder="Search"
                aria-label="Search"
                // value={searchTerm}
                // onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button
                variant="outlined"
                color="info"
                size="small"
                // onClick={doSearch}
              >
                <SearchIcon />
              </Button>
            </Form>
            <div style={{ display: 'flex' }}>
              <Nav.Link
                as={NavLink}
                to="/about"
                exact
                style={{ display: 'flex' }}
              >
                <Button
                  variant="outlined"
                  startIcon={<AddShoppingCartIcon />}
                ></Button>
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/admin"
                exact
                style={{ padding: 'unset' }}
              >
                <BadgeAvatars />
              </Nav.Link>
            </div>
          </Navbar>
        </Col>
      </Row>
      <Outlet />
    </div>
  );
};

export default Layout;
