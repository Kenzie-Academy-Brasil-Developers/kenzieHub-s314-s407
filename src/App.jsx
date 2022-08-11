import { useState } from "react";
import AppRoutes from "./routes";

import GlobalStyle from "./styles/global";
import { BaseContainer } from "./styles/Container";
import NotificationBox from "./components/NotificationBox";
import NotficationProvider from "./contexts/NotificationContext";

const App = () => {
  const [messageStatus, setMessageStatus] = useState([
    { message: "Mensagem de sucesso", type: "SUCCESS" },
    { message: "Mensagem de falha", type: "FAIL" },
    { message: "Mensagem de boas vindas" },
  ]);

  return (
    <BaseContainer>
      <NotficationProvider>
        <GlobalStyle />
        <NotificationBox content={messageStatus} />
        <AppRoutes message={messageStatus} handleMessage={setMessageStatus} />
      </NotficationProvider>
    </BaseContainer>
  );
};

export default App;
