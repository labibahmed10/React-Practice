import { useEffect, useState } from "react";
import "./App.css";
import AddCart from "./PRAC_User_API-fakejson/AddCart";
import User from "./PRAC_User_API-fakejson/User";
// import Main from "./Components/Main";
// import Form from "./FORM_CONTROL/Form";

function App() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setUser(data.results));
  }, []);

  const [item, setItem] = useState(0);
  const [cost, setCost] = useState(0);

  return (
    <div id="baap">
      <div className="container">
        {users.map((user, index) => (
          <User key={index} user={user} item={item} setItem={setItem} cost={cost} setCost={setCost}></User>
        ))}
      </div>

      <div>
        <AddCart ida={users} item={item} setItem={setItem} cost={cost} setCost={setCost}></AddCart>
      </div>
    </div>
  );
}

export default App;
