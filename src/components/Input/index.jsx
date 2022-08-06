import { useState } from "react";
import { BiErrorCircle } from "react-icons/bi";
// import { TextInputMask } from "react-native-masked-text";

import { ErrorTooltip, StyledInput, StyledSelect } from "./styles";

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
          <StyledInput isSelected={blur}>
            <input
              id={id}
              type={type}
              placeholder={placeholder}
              {...register(id)}
              onClick={() => setBlur(true)}
              onBlur={() => setBlur(false)}
            />
            {error?.message && (
              <ErrorTooltip>
                <BiErrorCircle />
                <p className="tooltip">{error.message}</p>
              </ErrorTooltip>
            )}
          </StyledInput>
        </>
      )}
    </>
  );
};

export default CustomInput;
