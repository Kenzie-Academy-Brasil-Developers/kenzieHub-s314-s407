import styled from "styled-components";
import { IStyledInput } from "../../types/typeComponentsStyles";

export const StyledInput = styled.div`
  background-color: var(--color-grey-2);
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 0.75rem;
  border-radius: 4px;
  border: ${({ border }: IStyledInput) => border()};
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

export const StyledSelect = styled.select<IStyledInput>`
  background-color: var(--color-grey-2);
  height: 3rem;
  box-sizing: border-box;
  padding-left: 0.5rem;
  border-radius: 4px;
  border: ${({ border }: IStyledInput) => border()};
  transition: 200ms ease-in-out;
  color: var(--color-grey-0);
  outline: none;
`;
