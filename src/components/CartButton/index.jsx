import Cart from '../../assets/cart.svg';
import { ContainerButton } from './styles.js';


export function CartButton({ ...props }) {
  return (
    <ContainerButton {...props}>
      <img src={Cart} alt="Carrinho-de-compras" />
      
    </ContainerButton>
  );
}