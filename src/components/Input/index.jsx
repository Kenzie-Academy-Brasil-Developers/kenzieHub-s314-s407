import { useState } from "react";
import Tooltip from "../Tooltip";

import { StyledInput, StyledSelect } from "./styles";

const CustomInput = ({
  select,
  id,
  label,
  type = "text",
  placeholder,
  register,
  error,
}) => {
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
          defaultValue="Módulo 1: (Frontend básico)"
        >
          <option value="Módulo 1: (Frontend básico)">Módulo 1</option>
          <option value="Módulo 2: (Frontend avançado)">Módulo 2</option>
          <option value="Módulo 3: (React)">Módulo 3</option>
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
