

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import  Card from'./card';
import Navv from "./navbar";
import Card2 from './Card2';
import Card3 from './Card3';

function App() {
  return (
    <div className="App">
 
   <Navv/>
   <div className="prt">
    <Card/>
    
    <Card2/>
    
    <Card3/>
    </div>
    </div>
  );
}

export default App;
