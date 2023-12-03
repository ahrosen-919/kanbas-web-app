import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signin = async () => {
    let account = await client.signin(credentials);
    console.log(account)
    navigate("/Kanbas/account");
  };
  return (
    <div>
      <h1>Sign In</h1>
      <input className="form-control w-25" value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
      <input className="form-control w-25" value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
      <button className="btn btn-primary" onClick={signin}> Sign In </button>
    </div>
  );
}
export default Signin;