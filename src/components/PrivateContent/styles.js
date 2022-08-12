import styled from "styled-components";

export const PageBase = styled.div`
  min-width: 100%;
  height: 100vh;
  padding-top: 13rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--color-grey-4);
  z-index: 2;
`;

export const NavBar = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 10%;
  box-sizing: border-box;
  z-index: 2;

  h1 {
    font-size: 1.1rem;
    color: var(--color-primary);
  }

  @media (min-width: 1100px) {
    padding: 1.2rem 0;
    justify-content: center;
    gap: 45rem;
  }
`;

export const UserInfos = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-top: 1px solid var(--color-grey-3);
  border-bottom: 1px solid var(--color-grey-3);
  padding: 0 10%;
  line-height: 2.5;
  height: 8.3rem;
  padding: 2rem 10%;
  box-sizing: border-box;

  h2 {
    font-size: 1.1rem;
    font-weight: 700;
  }

  span {
    font-size: 0.8rem;
    color: var(--color-grey-1);
    font-weight: 600;
  }

  @media (min-width: 690px) {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 1100px) {
    padding: 0;
    justify-content: center;
    gap: 30rem;
  }
`;
