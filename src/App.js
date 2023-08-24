

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PlayersList from './playerlist';
import Navv from "./navbar";
 

function App() {
  return (
    <div className="App">
    <Navv/>
   <div className="prt">
    <PlayersList/>
    </div>
    </div>
  );
}

export default App;
