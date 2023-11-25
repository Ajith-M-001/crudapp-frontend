import Header from "./Components/Header";
import Adduser from "./pages/Adduser";
import Alluser from "./pages/Alluser";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/add" element={<Adduser />} />
        <Route path="/all" element={<Alluser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
