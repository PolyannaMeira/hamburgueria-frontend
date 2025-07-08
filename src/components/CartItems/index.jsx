import { Table } from '../index';
import { useCart } from '../../hooks/CartContext';
import TrashIcon from '../../assets/trashIcon.svg';
import { formatPrice } from '../../utils/formatPrice';
import {
	ProductImage,
	ButtonGroup,
	EmptyCart,
	ProductTotalPrice,
    TrashImagem
} from './styles';

export function CartItens() {
	const { cartProducts, decreaseProduct, increaseProduct, deleteProduct } = useCart();
	console.log(cartProducts);

	return (
		<Table.Root>
			<Table.Header>
				<Table.Tr>
					<Table.Th />
					<Table.Th>Itens</Table.Th>
					<Table.Th>Preços</Table.Th>
					<Table.Th>Quantidade</Table.Th>
					<Table.Th>Total</Table.Th>
                    <Table.Th />
				</Table.Tr>
			</Table.Header>
			<Table.Body>
				{cartProducts?.length ? (
					cartProducts.map((product) => (
						<Table.Tr key={product.id}>
							<Table.Td>
								<ProductImage src={product.url} />
							</Table.Td>
							<Table.Td>{product.name}</Table.Td>
							<Table.Td>{product.currencyValue}</Table.Td>
							<Table.Td>
								<ButtonGroup>
									<button
										type="button"
										onClick={() => decreaseProduct(product.id)}
									>
										-
									</button>
									{product.quantity}
									<button
										type="button"
										onClick={() => increaseProduct(product.id)}
									>
										+
									</button>
								</ButtonGroup>
							</Table.Td>
							<Table.Td>
								<ProductTotalPrice>
									{formatPrice(product.quantity * product.price)}
								</ProductTotalPrice>
							</Table.Td>
                            <Table.Td>
                            <TrashImagem src={TrashIcon} alt="Trash" onClick={() => deleteProduct(product.id)} />
                            </Table.Td>

						</Table.Tr>
					))
				) : (
					<Table.Tr>
						<Table.Td>
							<EmptyCart>Carrinho Vazio</EmptyCart>
						</Table.Td>
					</Table.Tr>
				)}
			</Table.Body>
		</Table.Root>
	);
}
