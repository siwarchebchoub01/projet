import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import arr from './product';

function card2() {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={arr[1].img}/>
    <Card.Body>
      <Card.Title>{arr[1].name}</Card.Title>
      <Card.Text>
      {arr[1].description}.
      </Card.Text>
      <h2>{arr[1].price}</h2>
      <Button variant="primary ">ajouter</Button>
    </Card.Body>
  </Card>
  )
}

export default card2