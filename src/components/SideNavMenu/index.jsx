import { Container, NavLinkContainer, NavLink, Footer } from './styles';
import { navLinks } from './navLinks';
import Logo from '../../assets/devburguer-logo.png';
import { SignOut } from '@phosphor-icons/react';
import { useUser } from '../../hooks/UserContext.jsx';
import { useResolvedPath } from 'react-router-dom';

export function SideNavAdmin() {
	const { logout } = useUser();
	const { pathname } = useResolvedPath();

	return (
		<Container>
			<img src={Logo} alt="Hamburguer Logo DevBurger" />
			<NavLinkContainer>
				{navLinks.map((link) => (
					<NavLink key={link.id} to={link.path}
					$isActive={pathname === link.path}
					>
						{link.icon}
						<span>{link.label}</span>
					</NavLink>
				))}
			</NavLinkContainer>
			<Footer>
				<NavLink to="/login" onClick={logout}>
					<SignOut />
					<span>Sair</span>
				</NavLink>
			</Footer>
		</Container>
	);
}
