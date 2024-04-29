import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    html, body, #root {
        height: 100vh;
        overflow: hidden;
    }

    body {
        background: ${({ theme }) => theme.bgColor};
        color: ${({ theme }) => theme.textColor.primary};
        font-family: 'Kode mono', monospace;
        transition: .25s;
    }

    ::-webkit-scrollbar {
        width: 3px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.textColor.primary};
        border-radius: 5%;
    }
`;
