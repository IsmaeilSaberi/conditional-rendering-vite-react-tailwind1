import { Route, Routes } from "react-router-dom";
import NavComp from "./components/NavComp";
import Home from "./components/Home";
import About from "./components/About";
import Counter from "./components/Counter";

const App = () => {
  return (
    <div>
      <NavComp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </div>
  );
};

export default App;
