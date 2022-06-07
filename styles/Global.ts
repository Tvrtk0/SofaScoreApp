import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
    }

    html { font-size: 100%; }

    body {
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
        font-family: ${({ theme }) => theme.fonts.body};
        font-size: 100%;
        min-height: 100vh;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileBreakpoint}) {
        body {
            background-color: ${({ theme }) => theme.colors.bg1};
        }
    }

    code {
        font-family: ${({ theme }) => theme.fonts.monospace};
    }

    p {
        line-height: 1.5;
    }
    
    a {
        color: ${({ theme }) => theme.colors.primary};
        &:hover {
            color: ${({ theme }) => theme.colors.secondary};
        }
    }

    ::selection {
        color: ${({ theme }) => theme.colors.background};
        background-color: ${({ theme }) => theme.colors.primary};
    }

    
`;

export default GlobalStyles;
