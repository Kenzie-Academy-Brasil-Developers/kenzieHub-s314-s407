import styled from "styled-components";

export const NotificationContainer = styled.div`
  position: fixed;
  right: -20rem;
  top: 3%;
  display: flex;
  flex-direction: column;
  width: calc(16rem + 3%);
  gap: 0.5rem;
  animation: slide-in 1 5s;
  z-index: 1;
`;

export const Notification = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;

  background-color: var(--color-grey-2);
  height: 4rem;
  width: 16rem;
  border: 1px solid var(--color-grey-20);
  border-radius: 4px;

  .notification__content {
    height: 3.6rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0 0.5rem;

    svg {
      height: 1.8rem;
      width: 1.8rem;
    }

    .icon-success {
      color: var(--color-success);
    }

    .icon-negative {
      color: var(--color-negative);
    }

    h5 {
      font-size: 0.8rem;
      font-weight: 500;
    }
  }

  .n-load {
    animation: loading-bar 1 4s linear;
    height: 0.3rem;
  }

  .n-success {
    background-color: var(--color-success);
  }

  .n-negative {
    background-color: var(--color-negative);
  }
`;
