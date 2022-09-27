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
import EditPost from './pages/editPost/EditPost'
import CreatePost from './pages/createPost/CreatePost';
import SearchResult from './pages/searchResult/SearchResult';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Main />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/signup' exact element={<Signup />} />
        <Route path='/product/:productId' exact element={< Product />} />
        <Route path="/product/create" exact element={<CreatePost />} />
        <Route path="/product/edit/:productId" element={<EditPost />} />
        <Route path="/product/search" element={<SearchResult />} />
      </Routes>
    </div>
  );
}

export default App;
