import { useState } from "react"
import './style.css'

const AddProduct = ({products, setProducts}) => {

    const [inputInfo, setInputInfo] = useState({name:'', description:'', price:'' , discount:'' })

    const handleAddProduct = (event) => {
        event.preventDefault();
        const nextId = products.reduce((acc, item) => item.code > acc ? acc = item.code : acc, 0) + 1;
        const isProductIncluded = products.some(item => item.name === inputInfo.name);
        const isFilled = Object.values(inputInfo).every(item => item !== ''); //check if every input field is filled

        if(!isProductIncluded && isFilled){
            setProducts([...products, {...inputInfo, code: nextId}]);
            setInputInfo({name:'', description:'', price:'' , discount:''});
        }
    }

    return (
        <div className='form__container'>
            <h3>Adicionar produto</h3>
            <form onSubmit={handleAddProduct}>
                <input type="text" placeholder="Nome do Produto" onChange={event => setInputInfo({...inputInfo, name:event.target.value})} value={inputInfo.name}/>
                <input type="text" placeholder="Descrição do Produto" onChange={event => setInputInfo({...inputInfo, description:event.target.value})} value={inputInfo.description}/>
                <input type="number" placeholder="Valor do Produto" onChange={event => setInputInfo({...inputInfo, price:Number(event.target.value)})} value={inputInfo.price} />
                <input type="number" placeholder="Valor de Desconto" onChange={event => setInputInfo({...inputInfo, discount:Number(event.target.value)})} value={inputInfo.discount}/>
                <button type='submit'>Adicionar</button>
            </form>
        </div>
    )
}

export default AddProduct;