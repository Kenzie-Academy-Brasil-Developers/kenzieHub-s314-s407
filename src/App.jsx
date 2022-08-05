import { useState } from "react";
import AppRoutes from "./routes";

const App = () => {
  const [message, setMessage] = useState("");
  
  return (
    <div className="App">
      <div className="error">
        <figure></figure>
        <h5>{message}</h5>
      </div>
      <AppRoutes handleMessage={setMessage} />
    </div>
  );
};

export default App;
