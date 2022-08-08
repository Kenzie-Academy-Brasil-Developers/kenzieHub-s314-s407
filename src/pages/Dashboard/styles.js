import styled from "styled-components";

export const DashboardPage = styled.div`
  min-width: 100%;
  min-height: 100vh;

  section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-top: 1px solid var(--color-grey-3);
    border-bottom: 1px solid var(--color-grey-3);
    padding: 2.5rem 10%;
    line-height: 2.5;

    h2 {
      font-size: 1.1rem;
      font-weight: 700;
    }

    span {
      font-size: 0.8rem;
      color: var(--color-grey-1);
      font-weight: 600;
    }
  }

  main {
    display: none;
    line-height: 3;
    padding: 2.5rem 10%;
  }

  @media (min-width: 690px) {
    section {
      align-items: center;
      flex-direction: row;
    }

    main {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 10%;
  box-sizing: border-box;

  h1 {
    font-size: 1.1rem;
    color: var(--color-primary);
  }
`;
