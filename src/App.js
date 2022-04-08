import "./App.css";
import app from "./firebase.init";

import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";

const auth = getAuth(app);

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState("");
  const [registered, setRegistered] = useState(false);
  const [success, setSuccess] = useState("");
  const [name, setName] = useState("");

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const handleCheck = (event) => {
    setRegistered(event.target.checked);
  };

  const handleNameInput = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError("Fill Up the Form");
    }

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      return;
    }

    setValidated(true);

    if (registered) {
      signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          setError("");
          setSuccess("SuccessFully Loged In");
          console.log(res.user);
        })
        .catch((error) => setError(error.message));
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          console.log(res.user);
          setEmail("");
          setPassword("");
          setSuccess("SuccessFully Registered");
          verification();
          updateProfile(auth.currentUser, { displayName: name }).then(() => console.log("Updated"));
        })
        .catch((error) => setError(error.message));
    }
  };

  const verification = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      console.log("verification sent");
    });
  };
  const handlePasswordChange = () => {
    sendPasswordResetEmail(auth, email).then(() => console.log("password sent to there"));
  };
  return (
    <div>
      <div className="w-50 mx-auto mt-5">
        <h1 className="text-center text-success">{registered ? "Please Login" : "Register Now"}</h1>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          {!registered && (
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Your name</Form.Label>
              <Form.Control onBlur={handleNameInput} type="text" placeholder="Youre name" required />
              <Form.Text className="text-muted">Please enter your name.</Form.Text>
            </Form.Group>
          )}

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
          {<p className="text-danger">{error}</p>}
          {<p className="text-success">{success}</p>}
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check onClick={handleCheck} type="checkbox" label="Already Registered?" />
          </Form.Group>

          <Button onClick={handlePasswordChange} variant="link">
            Forgot Password?
          </Button>
          <br />

          <Button variant="danger" type="submit">
            {registered ? "Log In" : "Register"}
          </Button>
        </Form>
      </div>
      <div>
        <h2 className="text-center mt-5">Here are some of the User information</h2>
      </div>
    </div>
  );
}

export default App;
