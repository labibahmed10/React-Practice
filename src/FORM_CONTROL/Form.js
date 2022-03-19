import React, { useState } from "react";
import "./Form.css";

function Form() {
  /*   const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [pass, setPass] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePass = (e) => {
    setPass(e.target.value);
  }; */

  const [user, setUser] = useState({ name: "", email: "", password: "" });

  // let { name, email, pass } = user;

  const handleEvent = (e) => {
    // const fieldName = e.target.name;
    // if (fieldName === "name") {
    //   return setUser({ name: e.target.value, email, pass });
    // }
    // if (fieldName === "email") {
    //   return setUser({ name, email: e.target.value, pass });
    // }
    // if (fieldName === "password") {
    //   return setUser({ name, email, pass: e.target.value });
    // }
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log(user);
    e.preventDefault();
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text "
          name="name"
          id="name"
          required
          onChange={handleEvent}
          // onChange={(e) => setUser({ name: e.target.value, email, pass })}
          // onChange={handleName}
          // value={name}
        />
        <br />
        <br />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          onChange={handleEvent}
          // onChange={(e) => setUser({ name, email: e.target.value, pass })}
          // onChange={handleEmail}
          // value={email}
        />
        <br />
        <br />
        <label htmlFor="password">PassWord: </label>
        <input
          type="password"
          name="password"
          id="password"
          required
          autoComplete="true"
          onChange={handleEvent}
          // onChange={(e) => setUser({ name, email, pass: e.target.value })}
          // onChange={handlePass}
          // value={pass}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
        {/* <button onSubmit={(e) => console.log(e.preventDefault())}>Hoemas</button> */}
      </form>
    </div>
  );
}

export default Form;
