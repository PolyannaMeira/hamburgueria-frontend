import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useCart } from "../../hooks/CartContext";
import { useUser } from "../../hooks/UserContext";

import {api} from "../../services/api";
import { formatPrice } from "../../utils/formatPrice";
import { useNavigate } from "react-router-dom";
import {  Button } from "../Button";
import { Container } from "./styles";


export function CartResume() {

    const [finalPrice, setFinalPrice] = useState(0);
    const [deliveryTax] = useState(500);
    const { userInfo } = useUser();
    const {cartProducts, clearCart} = useCart();
    const navigate = useNavigate();
    useEffect(() => {
        const sumAllItems = cartProducts.reduce((acc, current) => {
            return current.price *current.quantity + acc;
        }, 0);
        setFinalPrice(sumAllItems);
    }, [cartProducts]);

    const submitOrder = async () => {
  if (!userInfo) {
    // User not logged in! Redirect to login page
    navigate('/login', { state: { from: '/checkout' } });
    return;
  }

  // User IS logged in - proceed with payment intent
  const products = cartProducts.map((product) => ({
    id: product.id,
    quantity: product.quantity,
    price: product.price,
  }));

  try {
    const { data } = await api.post('/create-payment-intent', { products });

    navigate('/checkout', {
      state: { clientSecret: data.clientSecret }
    });
  } catch (error) {
    toast.error('Erro, tente novamente', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
};

    return(
        <div>
        <Container>
            <div className="container-top">
                <h2 className="title">Resumo do Pedido</h2>
                <p className="items">Itens</p>
                <p className="items-price">{formatPrice(finalPrice )}</p>
                <p className="delivery-tax">Taxa de Entrega</p>
                <p className="delivery-tax-price">{formatPrice(deliveryTax)}</p>
            </div>
            <div className="container-bottom">
                <p>Total</p>
                <p>{formatPrice(finalPrice + deliveryTax)}</p>
            </div>
        </Container>
        <Button onClick={submitOrder}>
  {userInfo ? 'Finalizar Pedido' : 'Login para Finalizar Pedido'}
</Button>

        </div>
    )
}