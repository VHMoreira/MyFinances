import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        outline:0;
    }

    body{
        background: #212121;
        color: #FFF;
        --webkit-font-smoothing: antialiased;
    }

    body, input, button, select{
        color: #FFF;
    } 

    button{
        cursor: pointer;
    }
`;