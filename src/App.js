import React, { useState } from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Rating } from 'react-simple-star-rating';
import arr from './data';
import CardList from './cardlist';
import Nav1 from './navbar';

import './App.css';
import MovieDetails from './details';

function App() {
  const [info, setinfo] = useState(arr);
  const [search, setsearch] = useState('');
  const [rating, setrating] = useState(0);

  function Add(title, description, rating) {
    setinfo([...info, { title: title, description: description, rating: rating }]);
  }

  const handleRating = (rate) => {
    setrating(rate);
  };

  // Use useParams to get the movie ID from the URL
  const { id } = useParams();

  // Find the selected movie based on the ID
  const selectedMovie = info.find((movie) => movie.id === parseInt(id));

  return (
    <div>
      <Routes>
        <Route path="/add" element={<Nav1 Add={Add} />} />
        <Route
          path="/"
          element={
            <div>
              <input onChange={(e) => setsearch(e.target.value)} />
              <Rating onClick={handleRating} />
              <Link to="/add">
                <button>Add</button>
              </Link>
              <CardList
                data={info.filter(
                  (el) =>
                    el.title.toLowerCase().includes(search.toLowerCase()) &&
                    el.rating >= rating
                )}
              />
            </div>
          }
        />
        {/* Pass the selected movie object to the MovieDetails component */}
        <Route path="/movie/:id" element={<MovieDetails info={info} />} />
      </Routes>
    </div>
  );
}

export default App;
