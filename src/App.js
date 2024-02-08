
import './App.css';
import Navbar from './Compenents/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Product';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Shop/>} />
      <Route path='/fruits' element={<ShopCategory category="fruits"/>} />
      <Route path='/légumes' element={<ShopCategory category="légumes"/>} />
      <Route path='/viandes' element={<ShopCategory category="viandes"/>} />
      <Route path='/laitier' element={<ShopCategory category="laitier"/>} />
      <Route path="/product" element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>} />
      <Route path='/login' element={<LoginSignup/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
