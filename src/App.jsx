import AppRoutes from "./routes";

import GlobalStyle from "./styles/global";
import { BaseContainer } from "./styles/Container";
import NotficationProvider from "./contexts/NotificationContext";

const App = () => {
  return (
    <BaseContainer>
      <NotficationProvider>
        <GlobalStyle />
        <AppRoutes />
      </NotficationProvider>
    </BaseContainer>
  );
};

export default App;
