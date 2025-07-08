import styled from 'styled-components';
import {Button} from '../../../components/Button';
import ReactSelect from 'react-select';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`;

export const Form = styled.form`
    border-radius: 20px;
    background-color:${(props) => props.theme.black};
    padding: 32px;
    width: 100%;
    max-width: 380px;
    display: flex;
    flex-direction: column;
    gap: 12px;

`;
export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;
export const Label = styled.label`
    color: ${(props) => props.theme.white};
    font-size: 14px;
`;
export const Input = styled.input`
    width: 80%;
    height: 48px;
    border-radius: 5px;
    padding: 0 12px;
    border: none;
`;
export const LabelUpload = styled.label`
    cursor: pointer;
    border: 1px dashed ${(props) => props.theme.white};
    border-radius: 5px;
    padding: 12px;
    display: flex;
    color: ${(props) => props.theme.white};
    margin-top: 20px;
    

    > svg{
        width: 40px;
        height: 40px;
        fill: ${(props) => props.theme.white};
        margin-right: 4px;
    }

    input{
        display: none;
    }
    
`;
export const Select = styled(ReactSelect)`
    margin-top: 20px;
`;
export const SubmitButton = styled(Button)`
    margin-top: 30px;
`;
export const  ErrorMessage = styled.span`
    color: ${(props) => props.theme.darkRed};
    font-size: 14px;
    line-height: 80px;
    font-weight: 600;
`;
export const ContainerCheckBox = styled.div`
    display: flex;
    gap: 10px;
    cursor: pointer;
    margin-top: 10px;
    
    input{
        cursor: pointer;
    }
    `;