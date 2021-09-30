import './style.css'
import { toast } from 'react-toastify';

const Products = ({products, cartList, setCartList}) => {

    const handleAddToCart = (id) => {
        const product = products.find(item => item.code === id);
        const isProductInCart = cartList.some(item => item.code === id);

        if(!isProductInCart){
            setCartList([...cartList, {...product, quantity: 1}])
        } else {
            const updateCart = cartList.map(item => {
                if(item.code === id){
                    return {...item, quantity: item.quantity + 1};
                } else {
                    return item;
                }
            })            
            setCartList(updateCart);
        }

        toast.info("Produto adicionado ao carrinho", {autoClose: 2000})

    }

    return (
        <div className='products_list__container'>
            <h2>Lista de Produtos</h2>
            <div className='products__wrapper'>
                {products.map(({code, name, description, price, discount}) => {
                    return (
                        <div className='product_card' key={code}>
                            <h3>{name}</h3>
                            <details>
                                <summary>Descrição</summary>
                                <p>{description}</p>
                            </details>
                            <p><strong>Preço:</strong> $ {price}</p>
                            <p>{(discount / price * 100).toFixed(2)}% OFF!</p>
                            <p><strong>Preço total:</strong> $ {(price - discount).toFixed(2)}</p>
                            <button onClick={() => handleAddToCart(code)}>Adicionar ao Carrinho</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Products;