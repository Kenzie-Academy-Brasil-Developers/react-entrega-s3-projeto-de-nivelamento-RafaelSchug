const Cart = ({cartList, setCartList}) => {
    
    const handleRemoveItem = (id) => {
        setCartList(cartList.filter(item => item.code !== id))
    }

    return (
        <div className='cart__container'>
            <h2>Carrinho</h2>
            {cartList.map(({code, name, description, price, discount, quantity}, index) => {
                return (
                    <div className='cart_card' key={index}>
                        <h4>{name}</h4>
                        <p>{description}</p>
                        <p>Preço: $ {price}</p>
                        <p>Desconto: $ {discount}</p>
                        <p>Quantidade: {quantity}</p>
                        <button onClick={() => handleRemoveItem(code)}>Remover</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Cart;