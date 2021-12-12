import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import Gun from "gun";

const Main: NextPage = () => {
  const gun = Gun();
  const router = useRouter();

  const registerUser = async (event: any) => {
    event.preventDefault();
    console.log(event)
  }

  var [uname, setUname] = useState("");
  var [userPassword, setUserPassword] = useState("");
  var [confirmation, setConfirmation] = useState("");

  var [banner, setBanner] = useState("");

  function handleUname(event: any) {
    setUname(event.target.value);
  }

  function handlePassword(event: any) {
    setUserPassword(event.target.value);
  }

  return (
    <div className="basic scale">
      <form onSubmit={registerUser} className="formBody">
        <label htmlFor="uname" className="newline">Username</label>
        <input name="uname" type="text" className="inputField" placeholder="Minimum 6 characters" onChange={handleUname} />
        <label htmlFor="passwrd" className="newline">Password</label>
        <input name="passwrd" type="password" className="inputField" placeholder="Good: 1b&bnf?+_YhRE$" onChange={handlePassword} />
        <ul style={{
          display: "flex",
          flexDirection: "row-reverse",
          listStyleType: "none",
          margin: "2.5rem",
        }}>
          <li className="navItem select">Sign in</li>
        </ul>
        <h1>{banner}</h1>
      </form>
    </div>
  );
}

export default Main;