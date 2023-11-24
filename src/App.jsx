import Header from "./Components/Header";
import Adduser from "./pages/Adduser";
import Alluser from "./pages/Alluser";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <div>
      <Header />
      <Homepage />
      <Adduser />
      <Alluser />
    </div>
  );
};

export default App;
