import './style.css';

const Cart = ({cartList, setCartList}) => {
    
    const handleRemoveItem = (id) => {
        setCartList(cartList.filter(item => item.code !== id))
    }

    const handleCheckout = () => {
        setCartList([])
    }

    return (
        <div className='cart__container'>
            <h2>Carrinho</h2>
            {cartList.length > 0 && (
                <>
                    <div>
                        <p>Total: $ {(cartList.reduce((acc, item)=> acc + ((item.price - item.discount) * item.quantity), 0).toFixed(2))}</p>
                        <p>Você está economizando: $ {(cartList.reduce((acc, item) => acc + (item.discount * item.quantity), 0).toFixed(2))}</p>
                    </div>
                    <div className='cart__wrapper'>
                        {cartList.map(({code, name, description, price, discount, quantity}, index) => {
                            return (
                                <div className='cart_card' key={index}>
                                    <h4>{name}</h4>
                                    <details>
                                        <summary>Descrição</summary>
                                        <p>{description}</p>
                                    </details>
                                    <p><strong>Preço:</strong> $ {price}</p>
                                    <p><strong>Desconto:</strong> $ {discount}</p>
                                    <p><strong>Quantidade:</strong> {quantity}</p>
                                    <button onClick={() => handleRemoveItem(code)}>Remover</button>
                                </div>
                            )
                        })}
                    </div>
                    <button onClick={handleCheckout}>Finalizar Compra</button>
                </>
            )}
        </div>
    )
}

export default Cart;