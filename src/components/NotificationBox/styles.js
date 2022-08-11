import styled from "styled-components";

export const NotificationContainer = styled.div`
  position: fixed;
  right: 0;
  top: 3%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 17rem;
  height: 20rem;
  box-sizing: border-box;
  z-index: 1;
  pointer-events: none;
`;

export const Notification = styled.div`
  position: absolute;
  left: 200%;
  top: ${({yIndex}) => `calc(5rem * ${yIndex})`};
  display: flex;
  animation: slide-in 1 5s linear;
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

  @keyframes loading-bar {
    from {
      width: 0%;
    }

    to {
      width: 100%;
    }
  }

  @keyframes slide-in {
    0% {
      left: 200%;
    }

    15% {
      left: -1%;
    }

    20% {
      left: 0;
    }

    75% {
      left: 0;
    }

    80% {
      left: -1%;
    }

    100% {
      left: 200%;
    }
  }
`;
