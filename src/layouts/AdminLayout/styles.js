import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: minmax(220px, 280px) 1fr;

    main{
        display: flex;
        flex-direction: column;
        flex: 1;
        height: 100vh;
        width: 100%;
        background-color: ${props => props.theme.secondWhite};
        overflow: auto;
    }

    section{
        margin: 0 auto;
        padding: 40px 20px;
        width: 100%;
    }

`;
