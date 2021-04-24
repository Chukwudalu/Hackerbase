import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0%;
        box-sizing: border-box;
    }

    html{
        font-size: 62.5%;
    }

    body{
        background: #22223b
    }

    h2{
        font-size: 3.5rem;
        font-weight: lighter;
        font-family: 'Libre Baskerville', serif;
        
    }

    h3{
        font-size: 2.5rem;
    }

    span{
        color: #c9ada7
    }

    p{
        font-size: 2rem
    }

    button{
        color: white;
        background: none;
        padding: 10px 20px;
        border: 2px solid #c9ada7;
        margin: 10px 0;
        border-radius: 30px;
        font-family: 'Architects Daughter', cursive;
        font-size: 2rem;
        cursor: pointer;
        outline: none;

        &:hover{
            background: #c9ada7;
            font-weight: bold;
            color: black;
        }
    }

   

`

export default GlobalStyle;