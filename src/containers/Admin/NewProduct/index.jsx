import { Controller, useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
	Container,
	Form,
	InputGroup,
	Input,
	Label,
	LabelUpload,
	Select,
	SubmitButton,
	ErrorMessage,
    ContainerCheckBox,
} from './styles';
import { api } from '../../../services/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const schema = yup
	.object({
		name: yup.string().required('Digite o nome do produto'),
		price: yup
			.number()
			.positive()
			.required('Digite o preço do produto')
			.typeError('Digite o preço do produto'),
		category: yup.object().required('Selecione uma categoria'),
		offer: yup.boolean(),
		file: yup
			.mixed()
			.test('required', 'Escolha um arquivo para continuar', (value) => {
				return value && value.length > 0;
			})
			.test('fileSize', 'O arquivo deve ter menos de 5MB', (value) => {
				return (
					value && value.length > 0 && value[0].size <= 5 * 1024 * 1024 // 5 MB
				);
			})
			.test('type', 'Apenas arquivos PNG, JPG e JPEG são aceitos', (value) => {
				return (
					value &&
					value.length > 0 &&
					(value[0].type === 'image/png' ||
						value[0].type === 'image/jpg' ||
						value[0].type === 'image/jpeg')
				);
			}),
	})
	.required();

export function NewProduct() {
	const [fileName, setFileName] = useState(null);
	const [category, setCategory] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		async function loadCategories() {
			const { data } = await api.get('/categories');

			setCategory(data);
		}
		loadCategories();
	}, []);

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	const onSubmit = async (data) => {
		const productFormData = new FormData();
		productFormData.append('name', data.name);
		productFormData.append('price', data.price * 100);
		productFormData.append('category_id', data.category.id);
		productFormData.append('file', data.file[0]);
		productFormData.append('offer', data.offer);

		await toast.promise(api.post('/products', productFormData), {
			pending: 'Adicionando produto',
			success: 'Produto adicionado com sucesso',
			error: 'Erro ao adicionar produto, tente novamente',
		});
		setTimeout(() => {
			navigate('/admin/produtos');
		}, 2000);
	};

	return (
		<Container>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<InputGroup>
					<Label>Nome</Label>
					<Input type="text" {...register('name')} />
					<ErrorMessage>{errors.name?.message}</ErrorMessage>
				</InputGroup>
				<InputGroup>
					<Label>Preço</Label>
					<Input type="number" {...register('price')} />
					<ErrorMessage>{errors.price?.message}</ErrorMessage>
				</InputGroup>
				<InputGroup>
					<LabelUpload>
						<input
							type="file"
							{...register('file')}
							accept="image/png, image/jpg, image/jpeg"
							onChange={(value) => {
								setFileName(value.target.files[0]?.name);
								register('file').onChange(value);
							}}
						/>
						{fileName || 'Upload do Produto '}
					</LabelUpload>
					<ErrorMessage>{errors.file?.message}</ErrorMessage>
				</InputGroup>
				<InputGroup>
					<Label>Categoria</Label>
					<Controller
						name="category"
						control={control}
						render={({ field }) => (
							<Select
								{...field}
								options={category}
								getOptionLabel={(category) => category.name}
								getOptionValue={(category) => category.id}
								placeholder="Selecione uma categoria"
								menuPortalTarget={document.body}
							/>
						)}
					/>
					<ErrorMessage>{errors.category?.message}</ErrorMessage>
				</InputGroup>
				<InputGroup>
					<ContainerCheckBox>
						<input
							type="checkbox"
							
							{...register('offer')}
						/>
						<Label>Produto em Oferta?</Label>
					</ContainerCheckBox>
				</InputGroup>
				<SubmitButton>Adicionar Produto</SubmitButton>
			</Form>
		</Container>
	);
}
