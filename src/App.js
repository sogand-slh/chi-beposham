import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { RouterSwitch } from "./router/RouterSwitch";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full h-screen">
        <Header />
        <main>
          <RouterSwitch />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
