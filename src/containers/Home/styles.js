import styled from 'styled-components';
import BannerHome from '../../assets/banerHome.svg';
import Background from '../../assets/background2-login.jpg'

export const Banner = styled.div`
 
  background: url(${BannerHome});
  background-size: cover;
  background-position: center;
  height: 480px;

  h1{
    font-family: "${props => props.theme.roadRageFont};
    font-size: 80px;
    color: ${props => props.theme.darkWhite};
    position: absolute;
    right: 20%;
    top: 10%;
  }
`;

export const Container = styled.section`
  background: linear-gradient(
    rgba(255, 255, 255, 0.95),
    rgba(255, 255, 255, 0.95)
  ),url(${Background});
  background-size: cover; 
  background-repeat: no-repeat; 
  background-position: center;
   
`;

