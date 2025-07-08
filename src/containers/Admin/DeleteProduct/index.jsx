import { useState, useEffect } from 'react';
import {
    Container,
    InputGroup,
    Form,
    Input,
    Label,
    Select,
    SubmitButton,
    ContainerCheckBox,
} from './styles';
import { api } from '../../../services/api';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

export function DeleteProduct() {
    const [category, setCategory] = useState([]);
    const navigate = useNavigate();

    const {
        state: { product },
    } = useLocation();

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories');
            setCategory(data);
        }
        loadCategories();
    }, []);

    // Função para deletar o produto
    const handleDelete = async () => {
        await toast.promise(
            api.delete(`/products/${product.id}`),
            {
                pending: 'Deletando o produto',
                success: 'Produto deletado com sucesso',
                error: 'Erro ao deletar o produto, tente novamente',
            }
        );
        setTimeout(() => {
            navigate('/admin/produtos');
        }, 2000);
    };

    // ...existing code...
    return (
        <Container>
            <Form>
            <h2>Deseja realmente deletar este produto?</h2>
            <InputGroup>
                <Label>Nome</Label>
                <Input type="text" value={product.name} disabled />
            </InputGroup>
            <InputGroup>
                <Label>Preço</Label>
                <Input type="number" value={product.price / 100} disabled />
            </InputGroup>
            <InputGroup>
                <Label>Categoria</Label>
                <Select
                    value={product.category}
                    options={category}
                    getOptionLabel={(cat) => cat.name}
                    getOptionValue={(cat) => cat.id}
                    isDisabled
                />
            </InputGroup>
            <InputGroup>
                <ContainerCheckBox>
                    <input type="checkbox" checked={product.offer} disabled />
                    <Label>Produto em Oferta?</Label>
                </ContainerCheckBox>
            </InputGroup>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                <SubmitButton
                    type="button"
                    style={{ background: 'red' }}
                    onClick={handleDelete}
                >
                    Deletar Produto
                </SubmitButton>
                <SubmitButton
                    type="button"
                    style={{ background: '#555' }}
                    onClick={() => navigate('/admin/produtos')}
                >
                    Cancelar
                </SubmitButton>
            </div>
            </Form>
        </Container>
    );

}