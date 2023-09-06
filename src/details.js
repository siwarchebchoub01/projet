import React from 'react';
import { useParams } from 'react-router-dom';

function MovieDetails({ info }) {
  // Get the movie details based on the info prop or using useParams if you're using React Router
  // You can access the movie ID using useParams from React Router
   const OBJ = useParams();
  const newinfo=info.find(el=>el.id==OBJ.id)
console.log(newinfo);
  // Replace this with your trailer video URL
  const trailerUrl = 'https://www.example.com/trailer-url';

  return (
    <div>
      <h2>Movie Details</h2>
      {/* Display movie details here */}
      <p>Title: {newinfo.title}</p>
      <p>Description: {newinfo.description}</p>

      {/* Display the trailer video */}
      <iframe
        width="560"
        height="315"
        src={newinfo.trailerSrc}
        title="Trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default MovieDetails;
