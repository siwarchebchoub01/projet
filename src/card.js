import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Rating } from 'react-simple-star-rating';


function Cards({el}) {
    console.log(el);
  return (
    <div>
    <Card  className='card' style={{ width: '200px' }}>
    <Card.Img  variant="top" src={el.posterUrl} style={{ height: '200px' }} />
      <Card.Body  className='card-body'>
        <Card.Title className="card-title ">{el&&el.title}</Card.Title>
        <Card.Text className='card-text '>
          {el.description}.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item></ListGroup.Item>
      </ListGroup>
      <Rating iconsCount={5} readonly={true} initialValue={el.rating}/>
    </Card>

    </div>
  )
}

export default Cards