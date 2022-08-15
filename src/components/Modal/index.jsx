import { useContext } from "react";
import { SwitchContext } from "../../contexts/SwitchContext";
import CreateTech from "./_createTech";
import RemoveTech from "./_removeTech";
import { StyledModal } from "./styles";
import UpdateTech from "./_updateTech";

const CustomModal = () => {
  const { isOpened } = useContext(SwitchContext);

  return (
    isOpened.modal_window && (
      <StyledModal>
        <CreateTech />
        <RemoveTech />
        <UpdateTech />
      </StyledModal>
    )
  );
};

export default CustomModal;
