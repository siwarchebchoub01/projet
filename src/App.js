import Nav1 from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Rating } from 'react-simple-star-rating';
import arr from "./data"
import CardList from './cardlist'
import  './App.css';
import { useState } from 'react';
function App() {
 
const [info, setinfo] = useState(arr)
const [search, setsearch] = useState("")
const [rating, setrating] = useState(0)

function Add(title,description,rating){
  setinfo([...info,{title:title,description:description,rating:rating}])
}
const handleRating=(rate)=>{
  setrating(rate)
}
  return (
    <div className="App">
   <Nav1  Add={Add} />
   <input onChange={(e)=>setsearch(e.target.value)}  />
   <Rating onClick={handleRating} />
  <CardList data={info.filter((el)=>el.title.toLowerCase().includes(search.toLowerCase())&&el.rating>=rating)} />
   
    </div>
  );
}
export default App