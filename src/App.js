import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Addstudent from './components/Addstudent';
import Searchstudent from './components/Searchstudent';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <>

 <BrowserRouter>
 <Routes>

<Route path="/" exact element={ <Addstudent />}/>
<Route path="/Search" exact element={<Searchstudent/>}/>

 </Routes>


 
 </BrowserRouter>

</>
   
    

  );
}

export default App;
