import React from "react";
import Player from "./player";
import arr from "./players";
import "./index.css";
const PlayersList = () => {
  return (
    <div  className="parent" >
      {arr.map((el) =>  <Player props={el} key={el.id} /> )}


    </div>
  );
};

export default PlayersList;