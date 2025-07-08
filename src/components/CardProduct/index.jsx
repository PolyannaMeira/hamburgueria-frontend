import PropTypes from "prop-types";
import { useCart } from "../../hooks/CartContext";
import { Container, CardImage } from "../CardProduct/styles";
import { CartButton } from "../CartButton/index";

export function CardProduct({ product }) {
const { putProductInCart } = useCart();

  return (
        <Container>
        <CardImage src={product.url} alt={product.name}/>
        <div>
            <p>{product.name}</p>
            <strong>{product.currencyValue}</strong>
        </div>
        <CartButton onClick={ () => putProductInCart(product)}/>
    </Container>
  );
}



CardProduct.propTypes = {
  product: PropTypes.object,
};