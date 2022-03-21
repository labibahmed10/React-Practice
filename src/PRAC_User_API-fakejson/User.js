 /* Paste all this to your main file 
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
  ); */

/* import React, { useState } from "react";

import "./User.css";

const User = (props) => {
  console.log(props.user);
  const { item, cost, setItem, setCost } = props;

  const { name, dob, location, picture, id } = props.user;

  const setEverything = () => {
    setItem(item + 1);
    setCost(cost + 100);

    localStorage.setItem(id.value ? id.value : "user", 50);
  };

  return (
    <div className="singleUser">
      <img src={picture.medium} alt="" />

      <div>
        <h2>
          {name.first} {name.last}
        </h2>
        <h4>{dob.date.slice(0, 10)}</h4>
        <p>
          {location.city},{location.country}
        </p>

        <p>{id.value} </p>

        <button onClick={setEverything}>Add To Cart</button>
      </div>
    </div>
  );
};

export default User; */
 