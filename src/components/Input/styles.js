import styled from "styled-components";

export const StyledInput = styled.div`
  background-color: var(--color-grey-2);
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 0.75rem;
  border-radius: 4px;
  border: ${({ isSelected }) =>
    isSelected ? "1px solid var(--color-grey-0)" : "1px solid transparent"};
  transition: 200ms ease-in-out;
  position: relative;

  input {
    width: 85%;
    height: 95%;
    border: none;
    outline: unset;
    background-color: inherit;
    color: var(--color-grey-0);

    &::placeholder {
      color: var(--color-grey-1);
    }

    &:focus::placeholder {
      transition: 400ms;
      color: transparent;
    }
  }
`;

export const StyledSelect = styled.select`
  background-color: var(--color-grey-2);
  height: 3rem;
  box-sizing: border-box;
  padding-left: 0.5rem;
  border-radius: 4px;
  border: ${({ isSelected }) =>
    isSelected ? "1px solid var(--color-grey-0)" : "1px solid transparent"};
  transition: 200ms ease-in-out;
  color: var(--color-grey-0);
  outline: none;
`;

export const ErrorTooltip = styled.div`
  display: flex;
  align-items: center;
  cursor: help;

  svg {
    height: 1.1rem;
    width: 1.1rem;
    color: var(--color-negative);
  }

  &:hover .tooltip {
    opacity: 1;
    transition: 200ms ease-in-out;
  }

  .tooltip {
    top: 90%;
    right: 0.2rem;
    position: absolute;
    background-color: red;
    font-size: 0.6rem;
    width: 7rem;
    padding: 0.5rem;
    background-color: var(--color-grey-1);
    border-radius: 4px;
    opacity: 0;

    &::before {
      content: "";
      border-style: solid;
      border-width: 10px 7px 0 7px;
      border-color: var(--color-grey-1) transparent;
      position: absolute;
      right: 0.6rem;
      top: -0.4rem;
      transform: rotate(180deg);
    }

    @media (min-width: 769px) {
      right: -7.7rem;
      top: 20%;

      &::before {
        transform: rotate(90deg);
        right: unset;
        top: unset;
        left: -0.5rem;
      }
    }
  }
`;
