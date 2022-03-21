import "./App.css";
import { useEffect, useState } from "react";
import Store from "./FAKE_STORE_API/Store";
// import AddCart from "./PRAC_User_API-fakejson/AddCart";
// import User from "./PRAC_User_API-fakejson/User";
// import Main from "./Components/Main";
// import Form from "./FORM_CONTROL/Form";



function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div>
      <div className="cardstore">
        {items.map((item) => (
          <Store item={item} key={item.id}></Store>
        ))}
      </div>
    </div>
  );
}

export default App;
