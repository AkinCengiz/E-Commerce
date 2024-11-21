import BlogList from './pages/BlogList';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ContactPage from './pages/ContactPage';
import Account from './pages/Account';
import ProductDetail from './pages/ProductDetail';
import ShoppingCart from './pages/ShoppingCart';
import SingleBlog from './pages/SingleBlog';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/blogs' element={<BlogList />}/>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/contact' element={<ContactPage />}/>
        <Route path='/product/:id' element={<ProductDetail />}/>
        <Route path='/auth' element={<Account />}/>
        <Route path='/cart' element={<ShoppingCart />}/>
        <Route path='/blog/:id' element={<SingleBlog />}/>
        <Route path='/cart' element={<ShoppingCart />}/>
      </Routes>
    </div>
  );
}

export default App;
