import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Card from 'react-bootstrap/Card'; // Import Card from react-bootstrap

function MovieCard({ el }) { // Rename the custom Card component to MovieCard
  return (
    <div>
      <Card className='card' style={{ width: '200px', height: '600px' }}>
        <Card.Img variant="top" src={el.posterUrl} style={{ height: '200px' }} />
        <Card.Body className='card-body'>
          <Card.Title className="card-title">{el && el.title}</Card.Title>
          <Card.Text className='card-text'>
            {el.description}.
          </Card.Text>
          {/* Add a "Details" button */}
          <Link to={`/movie/${el.id}`}>
            <button>Details</button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieCard; // Export the renamed MovieCard component


