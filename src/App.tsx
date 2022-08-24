import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components/layout";
import { Home } from "./pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
