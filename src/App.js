

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import  Card from'./card';
import Navv from "./navbar";
import Cardd from './Card2';
function App() {
  return (
    <div className="App">
 
   <Navv/>
   <div className="prt">
    <Card/>
    
    <Card/>
    
    <Card/>
    </div>
    </div>
  );
}

export default App;
