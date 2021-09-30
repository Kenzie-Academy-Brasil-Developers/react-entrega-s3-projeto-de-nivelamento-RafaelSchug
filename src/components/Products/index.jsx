import products_list from "../../helper";
import { useState } from "react";

const Products = () => {

    const [products, setProducts] = useState(products_list);


    return (
        <div className='products_list__container'>
            {products.map(({code, name, description, price, discount}) => {
                return (
                    <div className='product_card' key={code}>
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <p>Preço: {price}</p>
                        <p>{(discount / price * 100).toFixed(2)}% OFF!</p>
                        <p>Preço total: {(price - discount).toFixed(2)}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Products;