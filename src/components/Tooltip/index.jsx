import { BiErrorCircle } from "react-icons/bi";

import { ErrorTooltip } from "./styles";

const Tooltip = ({ children }) => {
  return (
    <ErrorTooltip>
      <BiErrorCircle />
      <p className="tooltip">{children}</p>
    </ErrorTooltip>
  );
};

export default Tooltip;
