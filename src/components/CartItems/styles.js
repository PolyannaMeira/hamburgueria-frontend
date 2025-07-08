import styled from "styled-components";

export const ProductImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 16px;

`;

export const ButtonGroup = styled.div`
    display: flex;  
    align-items: center;
    gap: 12px;

    button{
        display: flex;
        align-items: center;        
        justify-content: center;
        width: 30px;
        height: 30px;
        color: ${props => props.theme.white};
        background-color: ${props => props.theme.purple};
        border-radius: 4px;
        transition: all 0.4s;

        &:hover{
            background-color: ${props => props.theme.secondDarkPurple};
        }
    }

`;

export const EmptyCart = styled.div`
  font-size: 20px;
  text-align: center;
  font-weight: bold;

`;

export const ProductTotalPrice= styled.p`
  font-weight: bold;

`;

export const TrashImagem= styled.img`
  height: 20px;
  width: 20px;
  cursor: pointer;

`;