import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './component/login';
import Register from './component/register';
import Viewcontact from './component/viewcontact';
import Addcontact from './component/addcontact';
import Editcontact from './component/editcontact';


function App() {

  
  return (
    <div className="App">
      <Routes>
        <Route path="/viewcontact" element={ <Viewcontact/> } />
        <Route path="/register" element={ <Register/> } />
        <Route path="/" element={ <Login/> } />
        <Route path="/addcontact" element={ <Addcontact/> } />
        <Route path="/editcontact/:id" element={ <Editcontact/> } />
      </Routes>
    </div>
  );
}

export default App;
