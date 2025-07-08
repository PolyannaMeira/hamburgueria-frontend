import { api } from '../../services/api';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useEffect, useState } from 'react';
import {
	Container,
	Title,
	ContainerItems,
	CategoryButton,
} from '../CategoriesCarousel/styles';

export function CategoriesCarousel() {
	const [categories, setCategories] = useState([]);
	
	

	useEffect(() => {
		async function loadCategories() {
			try {
				const { data } = await api.get('/categories');
				setCategories(data);
				
			} catch (error) {
				console.error('Failed to load categories:', error);
			}
		}
		loadCategories();
	}, []);

	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1280 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1280, min: 694 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 694, min: 0 },
			items: 1,
		},
	};

	return (
		<Container>
			<Title>Categorias</Title>
			<Carousel
				responsive={responsive}
				infinite={true}
				partialVisible={false}
				itemClass="carousel-item"
			>
				{categories.map((category) => (
					<ContainerItems key={category.id} $imageUrl={category.url}>
						<CategoryButton
							to={
									{
										pathname: '/usuario/menu',
										search: `?category=${category.id}`,
									}}
						>
							{category.name}
						</CategoryButton>
					</ContainerItems>
				))}
			</Carousel>
		</Container>
	);
}
