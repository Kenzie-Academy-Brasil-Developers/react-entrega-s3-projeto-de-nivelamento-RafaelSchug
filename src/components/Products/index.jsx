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
    }

    return (
        <div className='products_list__container'>
            <h2>Lista de Produtos</h2>
            {products.map(({code, name, description, price, discount}) => {
                return (
                    <div className='product_card' key={code}>
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <p>Preço: $ {price}</p>
                        <p>{(discount / price * 100).toFixed(2)}% OFF!</p>
                        <p>Preço total: $ {(price - discount).toFixed(2)}</p>
                        <button onClick={() => handleAddToCart(code)}>Adicionar ao Carrinho</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Products;