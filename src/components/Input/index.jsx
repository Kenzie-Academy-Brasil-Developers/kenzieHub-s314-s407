import { useState } from "react";
import Tooltip from "../Tooltip";

import { StyledInput, StyledSelect } from "./styles";

const CustomInput = ({ id, label, type = "text", placeholder, register, error, select, options }) => {
  const [blur, setBlur] = useState(false);

  const setBorder = () => {
    return error?.message
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
          id={id}
          type={type}
          {...register(id)}
          onClick={() => setBlur(true)}
          onBlur={() => setBlur(false)}
          defaultValue={options[0].value}
        >
          {options.map((option) => {
            return <option value={option.value} key={option.id}>{option.name}</option>
          })}
        </StyledSelect>
      ) : (
        <>
          <StyledInput border={setBorder}>
            <input
              id={id}
              type={type}
              placeholder={placeholder}
              {...register(id)}
              onClick={() => setBlur(true)}
              onBlur={() => setBlur(false)}
            />
            {error?.message && <Tooltip>{error.message}</Tooltip>}
          </StyledInput>
        </>
      )}
    </>
  );
};

export default CustomInput;
