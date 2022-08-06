import styled from "styled-components"

export const BaseContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    min-height: 100vh;

    background-color: var(--color-grey-4);
    color: var(--color-grey-0);

    .login__header, .register__header h1 {
        color: var(--color-primary);
        font-size: 1.1rem;
    }

    .login__header {
        margin-top: 1rem;
    }

    .register__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 95%;
        max-width: 20rem;
        margin: 3rem 0 1rem 0;
    }
`;