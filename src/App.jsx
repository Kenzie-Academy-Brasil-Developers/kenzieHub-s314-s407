import { useState } from "react";
import AppRoutes from "./routes";

import GlobalStyle from "./styles/global";
import { BaseContainer } from "./styles/Container";
import NotificationBox from "./components/MessagePopup";

const App = () => {
  const [message, setMessage] = useState("");
  
  return (
    <BaseContainer>
      <GlobalStyle />
      <NotificationBox content={message}/>
      <AppRoutes handleMessage={setMessage} />
    </BaseContainer>
  );
};

export default App;
