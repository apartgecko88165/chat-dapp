import type { NextPage } from "next";
import Image from "next/image";
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

  function handleConfirmation(event: any) {
    setConfirmation(event.target.value);
  }

  return (
    <div className="basic scale">
      <Image
        src="/img/bg/unsp-signup.jpg"
        alt="Unsplash image"
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
          <li className="navItem select" onClick={() => router.push("/user/login")}>Sign in</li>
          <li className="navItem select" style={{ left: "0%" }} onClick={() => {
            if (userPassword === confirmation) {
              let userdb = gun.get("userdb");
              userdb.get(uname).once((data: any, key: any) => {
                if (data != undefined) {
                  setBanner("User already exists.");
                } else {
                  userdb.get(uname).put({ id: uname, key: userPassword });
                  userdb.get(uname).get("inbox").put([{ sender: "do not reply", content: "Welcome to the future!" }]);
                  router.push("/user/login");
                }
              });
            }
          }}>Register</li>
        </ul>
        <h1>{banner}</h1>
      </form>
    </div>
  );
}

export default Main;