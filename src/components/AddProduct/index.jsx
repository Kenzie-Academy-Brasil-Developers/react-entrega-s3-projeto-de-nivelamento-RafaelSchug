import './style.css'
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';

const AddProduct = ({products, setProducts}) => {


    const [input, setInput] = useState({name:"", description:"", price:"", discount:""})
    const [error, setError] = useState(false);
       

    const handleAddProduct = (event) => {
        event.preventDefault();

        const checkInputFields = Object.values(input).every(item => item !== "");

        if(checkInputFields){
            const nextId = products.reduce((acc, item) => item.code > acc ? acc = item.code : acc, 0) + 1;
            const isProductIncluded = products.some(item => item.name === input.name);

            if(!isProductIncluded){
                setProducts([...products, {...input, code: nextId}]);
                toast.success("Produto adicionado", {autoClose: 2000})
                setInput({name:"", description:"", price:"", discount:""})
                setError(false);
            } else {
                toast.warn("Produto já incluso", {autoClose: 2000})
            }
        } else {
            setError(true);
        }
        
    }

    useEffect(()=> {
        if(error){
            const checkInputFields = Object.values(input).every(item => item !== "");
            if(checkInputFields){
                setError(false);
            }
        }
    }, [input, error])

    return (
        <div className='form__container'>
            <h3>Adicionar produto</h3>
            {error && <span className='error_msg'>Preencha todos os campos</span>}
            <form onSubmit={handleAddProduct}>
                <div>
                    <input type="text" placeholder="Nome do Produto" onChange={e => setInput({...input, name:e.target.value})} value={input.name} />
                </div>
                <div>
                    <input type="text" placeholder="Descrição do Produto" onChange={e => setInput({...input, description:e.target.value})} value={input.description} />
                </div>
                <div>
                    <input type="number" placeholder="Valor do Produto" onChange={e => setInput({...input, price: Number(e.target.value)})} value={input.price} />
                </div>
                <div>
                    <input type="number" placeholder="Valor de Desconto" onChange={e => setInput({...input, discount: Number(e.target.value)})} value={input.discount} />
                </div>
                <button type='submit'>Adicionar</button>
            </form>
        </div>
    )
}

export default AddProduct;