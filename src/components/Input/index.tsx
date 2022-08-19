import { InputHTMLAttributes, useState } from "react";
import { DeepRequired, FieldErrorsImpl, FieldValues, UseFormRegister } from "react-hook-form";
import Tooltip from "../Tooltip";
import { ISelectOptions } from "./options";

import { StyledInput, StyledSelect } from "./styles";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  register: UseFormRegister<FieldValues>;
  error?: FieldErrorsImpl<DeepRequired<FieldValues>>;
  select?: boolean;
  options?: ISelectOptions[];
}

const CustomInput = ({ id, label, register, error, select, options, ...rest }: IInputProps) => {
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
          {...register(id as string)}
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
              {...rest}
              {...register(id as string)}
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
