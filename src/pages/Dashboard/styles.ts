import styled from "styled-components";

interface CardProps {
    isNegative?: boolean;
}

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
`;

export const CardContainer = styled.div`
    display: flex;
    width: 100%;
    margin: 50px 0;
`;

export const Card = styled.div<CardProps>`
    display: flex;
    flex: 1;
    flex-direction: column;

    background: #201a38;
    padding: 20px;
    border: 1px solid #009c72;
    border-radius: 10px;

    &+&{
        margin-left: 50px;
    }

    h1 {
        font-size: 20px;
        color: ${props => props.isNegative ? '#ff2b2b' : '#00ff44'};
    }

    span{
        margin-top: 10px;
        font-size: 40px;
        color: ${props => props.isNegative ? '#ff2b2b' : '#00ff44'};
    }

`;


export const DetailsContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
`;


export const Details = styled.div<CardProps>`
    display: flex;
    align-items: center;
    width: 100%;
    background: #201a38;
    padding: 20px;

    & + &{
        margin-top: 10px;
    }

    div{
        flex: 1;
        display: flex;
        border-radius: 5px;
        align-items: center;
        justify-content: space-between;
        
        span{
            flex: 1;
            display: flex;
            flex-direction: column;
            overflow-wrap: break-word;
            max-width: 200px;
            font-size: 20px;
            color: ${props => props.isNegative ? '#ff2b2b' : '#00ff44'};
        }
    }

    button{
        max-height: 20px;
        background: transparent;
        border: 0px;
        color: #8c8c8c;

        &:hover{
            color: #ff2b2b;
            transition: color 0.5s;
        }
    }

`;

export const AddDetailButton = styled.button`
    margin-top: 20px;
    background: transparent;
    border-radius: 5px;
    border: 1px solid #009c72;
    padding: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    
    svg{
        color: #009c72;
    }

    span{
        margin-left: 10px;
        color: #009c72;
        font-size: 20px;
    }

    &:hover{
        background: #009c72;
        transition: background 0.5s;
        svg{
            color: #FFF;
            transition: color 0.5s;
        }

        span{
            margin-left: 10px;
            color: #FFF;
            font-size: 20px;
            transition: color 0.5s;
        }
    }
`;