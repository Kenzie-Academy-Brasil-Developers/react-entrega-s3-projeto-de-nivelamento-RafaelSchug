const Header = ({cartList}) => {
    return (
        <div>
            <p>
                Total: $ {(cartList.reduce((acc, item)=> acc + ((item.price - item.discount) * item.quantity), 0).toFixed(2))}
            </p>
            <p>Você está economizando: $ {(cartList.reduce((acc, item) => acc + (item.discount * item.quantity), 0).toFixed(2))}</p>
        </div>

    )
}

export default Header;