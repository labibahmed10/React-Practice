import "./App.css";

import Navbar from "./Component/Navbar";
import Cards from "./Component/Cards";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="second">
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
      </div>
    </div>
  );
}

export default App;
