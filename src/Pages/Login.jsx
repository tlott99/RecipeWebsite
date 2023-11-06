import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "../graphQLQuery";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Add your login logic here
  }

  return (
    <div className="col-span-2 col-start-3 Login my-32">
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Email"
          autoFocus
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          fullWidth
          type="submit"
          disabled={!validateForm()}
        >
          Login
        </Button>
      </form>
    </div>
  );
}
