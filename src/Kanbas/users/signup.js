import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "", password: "" });
  const navigate = useNavigate();
  
  const signup = async () => {
    try {
        console.log(credentials.username + " " + credentials.password)
      await client.signup(credentials);
      navigate("/Kanbas/Account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  useEffect(() => {
    console.log(credentials.username + " " + credentials.password);
  }, [credentials]);

  return (
    <div className="m-4">
      <h1>Signup</h1>
      {error && <div>{error}</div>}
      <input className="form-control w-75 m-1"
      placeholder="username"
        value={credentials.username}
        onChange={(e) => setCredentials({
          ...credentials,
          username: e.target.value })} />
      <input className="form-control w-75 m-1"
      placeholder="password"
        value={credentials.password}
        onChange={(e) => setCredentials({
          ...credentials,
          password: e.target.value })} />
      <button className="btn btn-primary w-75 m-1" onClick={signup}>
        Signup
      </button>
    </div>
  );
}
export default Signup;