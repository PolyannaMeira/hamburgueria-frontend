import { useNavigate, useResolvedPath } from 'react-router-dom';
import { useUser } from '../../hooks/UserContext.jsx';
import {
	Container,
  Content,
	Navigation,
  HeaderLink,
	Options,
	Profile,
	LinkContainer,
	Logout,
  
} from '../Header/styles.js';
import {ShoppingCart, UserCircle  } from "@phosphor-icons/react";
import { useCart } from '../../hooks/CartContext'


export function Header() {

  const navigate = useNavigate();
  const { logout, userInfo } = useUser();
  const {pathname} = useResolvedPath();
  const { cartQuantity } = useCart();
  console.log('Cart Quantity:', cartQuantity);


  function logoutUser () {
    logout();
    navigate('/login');
  }

	return (
		<Container>
      <Content>
			<Navigation>
				<div>
					<HeaderLink to="/" $isActive={pathname === '/'}>Home</HeaderLink>
          <hr />
					<HeaderLink to="/menu" $isActive={pathname === '/menu'}>Cardápio</HeaderLink>
				</div>
			</Navigation>
			<Options>
				<Profile>
          <UserCircle color='#fff' size={24}/>
					<div>
						<p>
							Olá, <span>{userInfo.name}</span>
						</p>
						<Logout onClick={logoutUser}>Sair</Logout>
					</div>
				</Profile>
        <LinkContainer style={{ position: 'relative' }}>
          <div style={{ position: 'relative' }}>
    <ShoppingCart color='#fff' size={24} />
    {cartQuantity > 0 && (
      <span
        style={{
          position: 'absolute',
          top: -8,
          right: -8,
          background: 'red',
          color: 'white',
          borderRadius: '50%',
          padding: '2px 6px',
          fontSize: '12px',
          fontWeight: 'bold',
          minWidth: '20px',
          textAlign: 'center',
          zIndex: 1,
        }}
      >
        {cartQuantity}
      </span>
    )}
  </div>
				<HeaderLink to='/carrinho'>Carrinho</HeaderLink>
			</LinkContainer>
			</Options>
			
      </Content>
		</Container>
	);
}
