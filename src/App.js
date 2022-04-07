import "./App.css";

import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import app from "./firebase.init";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const auth = getAuth(app);

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [validated, setValidated] = useState(false);
  const [register, setRegister] = useState(false);

  const getEmailValue = (e) => {
    setEmail(e.target.value);
  };
  const getPasswordValue = (e) => {
    setPassword(e.target.value);
  };

  const handleCheck = (e) => {
    setRegister(e.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    // if (!/^(?=.*[@$!%*#?&])/.test(password)) {
    //   setError("special character needed");
    //   return;
    // }

    setValidated(true);
    setError("");

    if (register) {
      signInWithEmailAndPassword(auth, email, password)
        .then((res) => console.log(res.usre))
        .catch((error) => setError(error.message));
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => console.log(res.user))
        .catch((error) => setError(error.message));
    }
  };

  return (
    <div className="mx-auto w-50 mt-5">
      <h2>Please {register ? "LOGIN" : "Register"}</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onBlur={getEmailValue} type="email" placeholder="Enter email" required />
          <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
          <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={getPasswordValue}
            type="password"
            placeholder="Password"
            required
            autoComplete="true"
          />
          <p className="text-danger">{error}</p>
          <Form.Control.Feedback type="invalid">Please provide a valid password.</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check onChange={handleCheck} type="checkbox" label="Already signed In?" />
        </Form.Group>
        <Button variant="primary" type="submit">
          {register ? "Login" : "Register"}
        </Button>
      </Form>
    </div>
  );
}

export default App;
