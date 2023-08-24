import React from "react";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types"

function player({props}) {
  const mystyle={
    width:"200px"
  }
  const styleImg={
height:"200px"
  }
  console.log(props);
  return (
    <Card style={mystyle}>
      <Card.Img variant="top" src={props.img}  style={styleImg} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text> {props.equipe}</Card.Text>
        <Card.Text> {props.nationalite}</Card.Text>
        <Card.Text>{props.jerseyNumber}</Card.Text>
        <Card.Text>{props.age}</Card.Text>

      </Card.Body>
    </Card>
  );}

  player.propTypes = {
    name: PropTypes.string,
   }
   player.defaultProps = {
     name:"name"
   };

export default player;