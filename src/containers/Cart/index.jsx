import Logo from '../../assets/devburguer-logo.png';
import { Container, Banner, Title, Content } from '../../containers/Cart/styles';
import { CartItens, CartResume } from '../../components';


export function Cart() {
  return (
    <Container>
        <Banner>
            <img src={Logo} alt="logo devburger" />
        </Banner>
        <Title>Checkout - Pedidos</Title>
        <Content>
            <CartItens/>
            <CartResume/>
        </Content>
    </Container>
  );
}