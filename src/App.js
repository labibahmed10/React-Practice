import "./App.css";
import app from "./firebase.init";

import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";

const auth = getAuth(app);

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState("");
  const [registered, setRegistered] = useState(false);

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const handleCheck = (event) => {
    setRegistered(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError("Fill Up the Form");
    }

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);

    if (registered) {
      signInWithEmailAndPassword(auth, email, password)
        .then((res) => console.log(res.user))
        .catch((error) => console.log(error));
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => console.log(res.user))
        .catch((error) => setError(error.message));
    }
  };

  return (
    <div className="w-50 mx-auto mt-5">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onBlur={handleEmailInput} type="email" placeholder="Enter email" required />

          <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={handlePasswordInput}
            type="password"
            placeholder="Password"
            autoComplete="true"
            required
          />
        </Form.Group>

        {email || password ? "" : <p className="text-danger">{error}</p>}

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check onClick={handleCheck} type="checkbox" label="Already Registered?" />
        </Form.Group>

        <Button variant="danger" type="submit">
          {registered ? "Log In" : "Register"}
        </Button>
      </Form>
    </div>
  );
}

export default App;
