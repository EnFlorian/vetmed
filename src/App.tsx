import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components/layout";
import { Home, NotFound } from "./pages";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
