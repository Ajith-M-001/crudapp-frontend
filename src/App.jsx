import Header from "./Components/Header";
import Adduser from "./pages/Adduser";
import Alluser from "./pages/Alluser";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleUser from "./pages/SingleUser";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/add" element={<Adduser />} />
        <Route path="/all" element={<Alluser />} />
        <Route path="/:id" element={<SingleUser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
