import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Col, Container, Row, Card } from 'react-bootstrap';
import { Button } from '@mui/material';

const Category = () => {
  const [cat, setCat] = useState(null);
  const params = useParams();
  useEffect(() => {
    var url = 'https://fakestoreapi.com/products/category/' + params.id;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCat(data);
      });
  }, []);
  var myList = [];
  if (cat != null) {
    myList = cat.map((item) => (
      <Col className={'mt-5'}>
        <Card
          className={'card'}
          style={{ width: '25rem', marginLeft: 'auto', marginRight: 'auto' }}
        >
          <ul className="side-icons">
            <span>
              <i className="bi bi-search"></i>
            </span>
            <span className={'heart'}>
              <i className="bi bi-heart-fill"></i>
            </span>
            <span>
              <i className="bi bi-sliders2"></i>
            </span>
          </ul>
          <Card.Img className={'img'} variant="top" src={item.image} />
          <Card.Body className={'text-center'}>
            <Card.Title style={{ height: '75px' }}>{item.title}</Card.Title>
            <Card.Text>${item.price}</Card.Text>
            <Link to={'product/' + item.id}>
              <Button
                variant="primary"
                className={'d-flex me-auto ms-auto button'}
              >
                Details
              </Button>
            </Link>
            <div className="add_cart">
              <i className="bi bi-cart-fill"></i>
            </div>
          </Card.Body>
        </Card>
      </Col>
    ));
  }

  return (
    <>
      <Container>
        <Row lg={6}>
          <Col className={'me-auto ms-auto mt-5'}>
            <h1 style={{ textTransform: 'uppercase' }}>{params.id}</h1>
          </Col>
        </Row>
        <Row className={'mt-5'}>{myList}</Row>
      </Container>
    </>
  );
};

export default Category;
