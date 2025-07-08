import styled from 'styled-components';
import BannerHamburger from '../../assets/hamburguerBanner.svg';
import Background from '../../assets/background2-login.jpg';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: ${(props) => props.theme.secondWhite};

    background: linear-gradient(
        rgba(255, 255, 255, 0.95),
        rgba(255, 255, 255, 0.95)
      ),url(${Background});
      
    
    `;

export const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 480px;
    width: 100%;
    position: relative;
    margin-bottom: 50px;
    

    background: url(${BannerHamburger}) no-repeat;
    background-position: center;
    background-color: ${(props) => props.theme.mainBlack};
    background-size: cover;

    h1 {
    font-size: 60px;
    line-height: 65px;
    color: ${(props) => props.theme.white};
    position: absolute;
    right: 20%;
    top: 30%;


    span{
        display: block;
        color: ${(props) => props.theme.white};
        font-size: 20px;
        font-weight: 400;
   }
    }
    
`;

export const CategoryMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top:30px;
    `;

export const CategoryButton = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    background: none;
    color: ${(props) => (props.$isActiveCategory ? (props) => props.theme.purple : (props) => props.theme.lightGray)};
    font-size: 24px;
    font-weight: 500;
    padding-bottom: 5px;
    line-height: 20px;
    border: none;
    border-bottom: ${(props) => props.$isActiveCategory && `2px solid ${(props) => props.theme.purple}`};


`;

export const ProductsContainer = styled.div`
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 60px;
        padding: 50px;
        justify-content: center;
        max-width: 1200px;
        margin:50px auto;
    `;
