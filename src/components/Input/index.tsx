import { useState } from "react";
import { IInputProps } from "../../types/typeComponents";
import Tooltip from "../Tooltip";

import { StyledInput, StyledSelect } from "./styles";

const CustomInput = ({ id, label, register, error, select, options, ...rest }: IInputProps) => {
  const [blur, setBlur] = useState(false);

  const setBorder = () => {
    return error
      ? "1px solid var(--color-negative)"
      : blur
      ? "1px solid var(--color-grey-0)"
      : "1px solid transparent";
  };

  return (
    <>
      <label htmlFor={id}>{label}</label>
      {select ? (
        <StyledSelect
          border={setBorder}
          {...register(id as string)}
          onClick={() => setBlur(true)}
          onBlur={() => setBlur(false)}
          defaultValue={options && options[0].value}
        >
          {options?.map((option) => {
            return <option value={option.value} key={option.id}>{option.name}</option>
          })}
        </StyledSelect>
      ) : (
        <>
          <StyledInput border={setBorder}>
            <input
              {...rest}
              {...register(id as string)}
              onClick={() => setBlur(true)}
              onBlur={() => setBlur(false)}
            />
            {error && <Tooltip>{error}</Tooltip>}
          </StyledInput>
        </>
      )}
    </>
  );
};

export default CustomInput;
