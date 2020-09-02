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

    @media only screen and (max-width:700px){
        max-width: 100%;

        overflow-x: hidden;
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    max-width: 100%;
    padding: 20px;

    img{
        width:100px;
        height:100px;
    }

    span{
        font-size: 40px;
        margin-left: 10px;
    }
`;

export const CardContainer = styled.div`
    display: flex;
    margin: 50px 0;
    padding: 20px;

    @media only screen and (max-width:700px){
        flex-direction: column;
    }
`;

export const Card = styled.div<CardProps>`
    display: flex;
    flex-direction: column;

    width: 100%;

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

    @media only screen and (max-width:700px){
        width: 100%;

        & + & {
            margin-top: 10px;
            margin-left: 0;
        }
    }

`;


export const DetailsContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    max-width: 1200;
    margin: 0 20px;
    
`;


export const Details = styled.div<CardProps>`
    display: flex;
    align-items: center;
    width: 100%;
    background: #201a38;
    padding: 20px;
    
    & + div{
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

        @media only screen and (max-width:700px){
            display: grid;
            grid-template-columns: 1fr 1fr;
            row-gap: 20px;
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


export const DetailsForm = styled.form`
    display: flex;
    align-items: center;
    width: 100%;
    background: #201a38;
    padding: 20px;
    margin-top: 10px;

    div{
        flex: 1;
        display: flex;
        border-radius: 5px;
        align-items: center;
        justify-content: space-between;

        select{
            background: transparent;
            padding: 10px;
            border: 1px solid #009c72;
            border-radius: 5px;
        }
        
        input{
            flex: 1;
            display: flex;
            flex-direction: column;
            overflow-wrap: break-word;
            max-width: 200px;
            font-size: 20px;
            background: transparent;
            border: 1px solid #009c72;
            border-radius: 5px;
            padding: 10px;
        }

        @media only screen and (max-width:700px){
            display: grid;
            grid-template: "
                select input input
                select input input
            ";
            row-gap: 20px;
        }
    }

    button{
        max-height: 20px;
        background: transparent;
        border: 0px;
        color: #8c8c8c;
        margin-left: 20px;

        &:hover{
            color: #00ff44;
            transition: color 0.5s;
        }

        & + button:hover{
            color: #ff2b2b;
            transition: color 0.5s;
        }
    }

`;

export const AddDetailButton = styled.button`
    margin-top: 20px;
    max-width: 1200;
    margin: 20px 20px;
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