import './style.css'
import { useForm } from "react-hook-form"
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup';
import { toast } from 'react-toastify';

const AddProduct = ({products, setProducts}) => {

    const schema = yup.object().shape({
        name: yup.string().required("Campo obrigatório"),
        description : yup.string().required("Campo obrigatório"),
        price : yup.number().typeError("Valor obrigatório").required("Campo Obrigatório").test("Valor precisa ser positivo", "number", value => value > 0),
        discount: yup.number().typeError("Valor obrigatório").required("Campo obrigatório").test("Valor precisa ser maior ou igual à 0", "number", value => value >= 0),
    })

    const {register, handleSubmit, formState:{errors}, reset} = useForm({resolver: yupResolver(schema)})


    const handleAddProduct = (data) => {

        const nextId = products.reduce((acc, item) => item.code > acc ? acc = item.code : acc, 0) + 1;
        const isProductIncluded = products.some(item => item.name === data.name);

        if(!isProductIncluded){
            setProducts([...products, {...data, code: nextId}]);
            reset();
            toast.success("Produto adicionado", {autoClose: 2000})
        } else {
            toast.warn("Produto já incluso", {autoClose: 2000})
        }
    }


    return (
        <div className='form__container'>
            <h3>Adicionar produto</h3>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div>
                    <input type="text" placeholder="Nome do Produto"  {...register('name')}/>
                    {!!errors.name && <span>{errors.name?.message}</span>}
                </div>
                <div>
                    <input type="text" placeholder="Descrição do Produto" {...register('description')}/>
                    {!!errors.description && <span>{errors.description?.message}</span>}
                </div>
                <div>
                    <input type="number" placeholder="Valor do Produto"  {...register('price')}/>
                    {!!errors.price && <span>{errors.price?.message}</span>}
                </div>
                <div>
                    <input type="number" placeholder="Valor de Desconto"  {...register('discount')}/>
                    {!!errors.discount && <span>{errors.discount?.message}</span>}
                </div>
                <button type='submit'>Adicionar</button>
            </form>
        </div>
    )
}

export default AddProduct;