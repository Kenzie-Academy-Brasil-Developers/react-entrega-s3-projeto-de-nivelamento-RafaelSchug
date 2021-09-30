import './App.css';
import Products from './components/Products';
import {useState} from 'react';
import products_list from './helper';
import AddProduct from './components/AddProduct';
import Cart from './components/Cart';
import Header from './components/Header';


function App() {

  const [products, setProducts] = useState(products_list);
  const [cartList, setCartList] = useState([]);

  return (
    <div className="App">
      <Header cartList={cartList}></Header>
      <AddProduct products={products} setProducts={setProducts}></AddProduct>
      <Products products={products} cartList={cartList} setCartList={setCartList}></Products>
      <Cart cartList={cartList} setCartList={setCartList}></Cart>
    </div>
  );
}

export default App;
