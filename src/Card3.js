import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import arr from './product';

function Card3() {
    var name="x"
    var firstname="j"
  return (
    <Card style={{ width: '18rem' }}>
   {firstname ? <Card.Img variant="top" src="https://www.tunisianet.com.tn/291275-large/pc-portable-lenovo-thinkpad-e14-gen-4-i5-1235u-12-go.jpg" />:null}
    <Card.Body>
      <Card.Title>{name?"hello":"hello there"}</Card.Title>
      <Card.Text>
     
      </Card.Text>
      <h2></h2>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  )
}

export default Card3