import Header from "./components/Header";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import "./App.css";
import { CartPage, HomePage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}>
            Cart Page
          </Route>
          <Route to="/cart">Cart Page</Route>
          <Route to="/product">Product Page</Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
