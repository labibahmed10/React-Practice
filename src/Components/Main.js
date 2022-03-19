import React, { useState } from "react";
import HomePage from "./HomePage";
// import HomePage from "./HomePage";
import SignInPage from "./SignInPage";

const Main = (props) => {
  let [isLogIn, setLogIn] = useState(false);

  console.log(isLogIn);
  return (
    <div>{isLogIn ? <HomePage></HomePage> : <SignInPage state={isLogIn} func={setLogIn}></SignInPage>}</div>
  );
};

export default Main;
