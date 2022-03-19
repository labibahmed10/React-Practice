import React from "react";
import "./SigninPage.css";

const SignInPage = (props) => {
  let { state, func } = props;

  return (
    <div>
      <h1>This is Sign In page</h1>
      <div className="form">
        <label htmlFor="name">Name: </label>
        <input type="name" required onKeyUp={(e) => console.log(e.target.value)} />
        <br />
        <br />
        <label htmlFor="email">Email: </label>
        <input type="email" required onChange={(e) => console.log(e.target.value)} />
        <br />
        <br />
        <label htmlFor="password">PassWord: </label>
        <input type="password" required />
        <br />
        <br />
        <button id="btn" type="submit" onClick={() => func((state = true))}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default SignInPage;
