import styled from "styled-components";
import { AiOutlineLoading3Quarters, AiOutlineLoading } from "react-icons/ai";
import { ILoadStyleProps } from "../../types/typeComponentsStyles";

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  h1 {
    position: absolute;
    top: 7rem;
  }

  @keyframes standart-spin {
    to {
      transform: rotate(var(--origin));
    }

    from {
      transform: rotate(calc(var(--origin) + var(--is-reverse)));
    }
  }
`;

export const TqIcon = styled(AiOutlineLoading3Quarters)<ILoadStyleProps>`
  --origin: ${({ origin }) => `${origin}deg`};
  --is-reverse: ${({ reverse = false }) => (!reverse ? "360deg" : "-360deg")};

  position: absolute;
  width: ${({ size }) => `${size}rem`};
  height: ${({ size }) => `${size}rem`};
  color: ${({ color }) => color};

  animation: standart-spin infinite ${({ duration }) => `${duration}ms`} linear;
`;

export const QuarterIcon = styled(AiOutlineLoading)<ILoadStyleProps>`
  --origin: ${({ origin }) => `${origin}deg`};
  --is-reverse: ${({ reverse = false }) => (!reverse ? "360deg" : "-360deg")};

  position: absolute;
  width: ${({ size }) => `${size}rem`};
  height: ${({ size }) => `${size}rem`};
  color: ${({ color }) => color};

  animation: standart-spin infinite ${({ duration }) => `${duration}ms`} linear;
`;
