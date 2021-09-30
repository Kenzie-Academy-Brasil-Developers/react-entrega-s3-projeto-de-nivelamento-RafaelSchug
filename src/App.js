import './App.css';
import Products from './components/Products';
import {useState} from 'react';
import products_list from './helper';
import AddProduct from './components/AddProduct';


function App() {

  const [products, setProducts] = useState(products_list);

  return (
    <div className="App">
      <AddProduct products={products} setProducts={setProducts}></AddProduct>
      <Products products={products}></Products>
    </div>
  );
}

export default App;
