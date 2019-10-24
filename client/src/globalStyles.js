import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing:border-box;
        margin:0;
        padding:0;
    }
    body{
        font-family: 'Muli', sans-serif;
        margin:0;
    }
    a{
        text-decoration:none;
        color:black;
    }
    
`;

export default GlobalStyle;
