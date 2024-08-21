import './App.css';
import "./Popup.css"
import Sidebar from "..//src/Components/CRUD/Sidebar"
import Analytics from "./Components/CRUD/Sections/Analytics"
import Inventry from "./Components/CRUD/Sections/Inventry"
import Product from "./Components/CRUD/Sections/Product"
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Sidebar>
        <Routes>
          <Route path='/' element={<Analytics />}/>
          <Route path='/analytics' element={<Analytics />}/>
          <Route path='/inventry' element={<Inventry />}/>
          <Route path='/product' element={<Product />}/>
        </Routes>
        </Sidebar>
        </BrowserRouter>
    </div>
  );
}

export default App;
