import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import Gun from "gun";

const Main: NextPage = () => {
  const gun = Gun();

  const registerUser = async (event: any) => {
    event.preventDefault();
    console.log("event")
  }

  var [uname, setUname] = useState("");
  var [userPassword, setUserPassword] = useState("");
  var [confirmation, setConfirmation] = useState("");

  function handleUname(event: any) {
    setUname(event.target.value);
  }

  function handlePassword(event: any) {
    setUserPassword(event.target.value);
  }

  function handleConfirmation(event: any) {
    setConfirmation(event.target.value);
  }

  return (
    <div className="basic scale">
      <Image
      src="/unsplash-bg.jpg"
      alt="Unsplash Backdrop"
      layout="fill"
    />
      <form onSubmit={registerUser} className="formBody">
        <label htmlFor="uname" className="newline">Username</label>
        <input name="uname" type="text" className="inputField" placeholder="Minimum 6 characters" onChange={handleUname} />
        <label htmlFor="passwrd" className="newline">Password</label>
        <input name="passwrd" type="password" className="inputField" placeholder="Good: 1b&bnf?+_YhRE$" onChange={handlePassword} />
        <label htmlFor="re-enter" className="newline">Re-enter password</label>
        <input name="re-enter" type="password" className="inputField" onChange={handleConfirmation} />
        <ul style={{
          display: "flex",
          flexDirection: "row-reverse",
          listStyleType: "none",
          margin: "2.5rem",
        }}>
          <li className="navItem select">Sign in</li>
          <li className="navItem select" style={{ left: "0%" }} onClick={() => {
            if (userPassword === confirmation) {
              gun.get("user")
            }
          }}>Register</li>
        </ul>
      </form>
    </div>
  );
}

export default Main;