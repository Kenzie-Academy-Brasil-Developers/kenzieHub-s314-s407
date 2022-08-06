import { useState } from "react";
import AppRoutes from "./routes";

import GlobalStyle from "./styles/global";
import { BaseContainer } from "./styles/Container";
import NotificationBox from "./components/NotificationBox";
import { useEffect } from "react";

const App = () => {
  const [messageStatus, setMessageStatus] = useState({
    message: "",
    type: "",
    status: false,
  });

  return (
    <BaseContainer>
      <GlobalStyle />
      <NotificationBox content={messageStatus} />
      <AppRoutes message={messageStatus} handleMessage={setMessageStatus} />
    </BaseContainer>
  );
};

export default App;
