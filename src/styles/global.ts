import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${props => props.theme.colors.background};
        font-size: 14px;
        color: ${props => props.theme.colors.text};
        font-family: sans-serif;
    }

    .section-a {
        display:flex;
        flex-direction: column;
        justify-content: center;
        margin: 50px auto;
        align-items: left;
        background-color: #333;
        max-width: 400px;
        padding: 20px;
        border-radius: 1rem;
        color: #f5f5f5;
    }

    .section-a h1 {
        font-size: 1.7rem;
        padding-bottom: 5px;
        margin-bottom: 10px;
        border-bottom: 1px solid #555;
    }
    .section-a p {
        font-size: 1.2rem;
    }
`