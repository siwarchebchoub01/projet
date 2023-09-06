import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar({Add}) {
  const navigate=useNavigate()
  const [title, settitle] = useState("")
  const [description, setdescription] = useState("")
  const [rating, setrating] = useState("")
  const handleSearchSubmit = (e) => {
    e.preventDefault();
  Add(title,description,rating)
  };

const handleClick=()=>{
  if(title&&description&&rating){
    navigate("/")
  }
  else {
    alert("siwar")
  }
}

  return (
    <div  id="nav" >  
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">MOVIES</a>
          <form className="d-flex" onSubmit={handleSearchSubmit}>
            <input className="form-control me-2"  onChange={(e)=>settitle(e.target.value)}  />
            <input className="form-control me-2"  onChange={(e)=>setdescription(e.target.value)} />
            <input className="form-control me-2"  onChange={(e)=>setrating(e.target.value)}  />
            <button className="btn btn-outline-success" type="submit"  onClick={handleClick}   >
              Add
            </button>
          </form>
          
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
