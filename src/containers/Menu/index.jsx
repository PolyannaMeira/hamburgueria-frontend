import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { formatPrice } from '../../utils/formatPrice';
import { CardProduct } from '../../components/CardProduct';

import {
	Container,
	Banner,
	CategoryMenu,
	ProductsContainer,
	CategoryButton,
} from './styles';

export function Menu() {
	const [categories, setCategories] = useState([]);
	const [products, setProducts] = useState([]);
	const [filteredproducts, setFilteredproducts] = useState([]);

	const navigate = useNavigate();
	const { search } = useLocation();
	const queryParams = new URLSearchParams(search);

	const [activeCategory, setActiveCategory] = useState(() => {
		const categoryId = +queryParams.get('category');

		if (categoryId) {
			return categoryId;
		}
		return 0;
	});

	useEffect(() => {
		async function loadCategories() {
			try {
				const { data } = await api.get('/categories');
				const newCategories = [{ id: 0, name: 'Todas' }, ...data];
				setCategories(newCategories);
				
			} catch (error) {
				console.error('Failed to load categories:', error);
			}
		}

		async function loadProducts() {
			try {
				const { data } = await api.get('/products');
				const newProducts = data.map((product) => ({
					currencyValue: formatPrice(product.price),
					...product,
				}));

				setProducts(newProducts);
			} catch (error) {
				console.error('Failed to load products:', error);
			}
		}
		loadCategories();
		loadProducts();
	}, []);

	useEffect(() => {
		if (activeCategory === 0) {
			setFilteredproducts(products);
		} else {
			const newFilteredProducts = products.filter(
				(product) => product.category.id === activeCategory,
			);
			setFilteredproducts(newFilteredProducts);
		}
	}, [products, activeCategory]);

	return (
		<Container>
			<Banner>
				<h1>
					O MELHOR <br />
					HAMBURGUER <br />
					ESTÁ AQUI!<span>Esse cardápio está irresistível!</span>
				</h1>
			</Banner>
			
			<CategoryMenu>
				{categories.map((category) => (
					<CategoryButton
						key={category.id}
						$isActiveCategory={category.id === activeCategory}
						onClick={() => {
							navigate(
								{
									pathname: '/menu',
									search: `?category=${category.id}`,
								},
								{ replace: true },
							);
							setActiveCategory(category.id);
						}}
					>
						{category.name}
					</CategoryButton>
				))}
			</CategoryMenu>
			<ProductsContainer>
				{filteredproducts.map((product) => (
					<CardProduct key={product.id} product={product} />
				))}
			</ProductsContainer>
		</Container>
	);
}
