const { createGlobalStyle } = require("styled-components");

const GlobalStyle = createGlobalStyle`
    /* Color pallete */
    :root {
        --color-primary:          #FF577F;
        --color-primary-focus:    #FF427F;
        --color-primary-negative: #59323F;
        --color-grey-0:           #F8F9FA;
        --color-grey-1:           #868E96;
        --color-grey-10:          #767E86;
        --color-grey-2:           #343B41;
        --color-grey-20:          #2D343A;
        --color-grey-3:           #212529;
        --color-grey-4:           #121214;
        --color-grey-50:          #868E96;
        --color-success:          #3FE864;
        --color-negative:         #E83F5B;
    }

    /* Typhography */
    * {
        font-family: 'Inter', sans-serif;
        margin: 0;

    }

    body {
        box-sizing: border-box;
        padding: 0;
        background-color: var(--color-grey-4);
    }

    button {
        cursor: pointer;
    }

    /* set Autocomplete fields */
    input:-webkit-autofill{
        box-shadow: 0 0 0 100px var(--color-grey-2) inset;
        transition: background-color infinite ease-in-out 0s;
        -webkit-text-fill-color: var(--color-grey-0);
    }
`;

export default GlobalStyle;
