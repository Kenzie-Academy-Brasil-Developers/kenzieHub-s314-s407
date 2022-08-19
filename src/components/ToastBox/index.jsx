import { ToastThrower } from "./styles";



const ToastBox = () => {
  return (
    <ToastThrower
      position="top-center"
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
};

export default ToastBox;
