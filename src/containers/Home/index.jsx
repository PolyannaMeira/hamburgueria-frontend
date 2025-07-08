import { Banner, Container } from './styles';
import { CategoriesCarousel, OffersCarousel } from '../../components';

export function Home() {
	return (
		<main>
			<Banner>
				<h1>Bem Vindo(a)</h1>
			</Banner>
			<Container>
				<div>
					<CategoriesCarousel />
					<OffersCarousel />
				</div>
			</Container>
		</main>
	);
}
