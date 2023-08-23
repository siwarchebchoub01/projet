import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import arr from "./product"

function Cardd() {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={arr[0].img}/>
    <Card.Body>
      <Card.Title>{arr[0].name}</Card.Title>
      <Card.Text>
      {arr[0].description}.
      </Card.Text>
      <h2>{arr[0].price}</h2>
      <Button variant="primary ">ajouter</Button>
    </Card.Body>
  </Card>
  )
}

export default Cardd