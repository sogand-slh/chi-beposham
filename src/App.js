import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { RouterSwitch } from "./router/RouterSwitch";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <RouterSwitch />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
