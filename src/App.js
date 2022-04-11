import { BrowserRouter } from "react-router-dom";
import { RouterSwitch } from "./router/RouterSwitch";

//components
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
// Redux
import { Provider } from 'react-redux';
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter >
        <div className="w-full h-screen flex flex-col justify-between">
          <Header />
          <main className="flex flex-col justify-between">
            <RouterSwitch />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
