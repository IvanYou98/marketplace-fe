import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";

import Main from './pages/main/Main'
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Product from './pages/product/Product';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Main />} />
        <Route path='/home' exact element={<Home />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/signup' exact element={<Signup />} />
        <Route path='/product' exact element={< Product />} />
      </Routes>
    </div>
  );
}

export default App;
