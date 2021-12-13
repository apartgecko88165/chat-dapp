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

  var [error, setError] = useState("");

  function handleUname(event: any) {
    setUname(event.target.value);
  }

  function handlePassword(event: any) {
    setUserPassword(event.target.value);
  }

  return (
    <div className="basic scale">
      <Image
        src="/img/bg/unsp-login.jpg"
        alt="Unsplash image"
        layout="fill"
      />
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
          <li className="navItem select" onClick={() => router.push("/user/signup")}>Register</li>
          <li className="navItem select" onClick={() => {
            try {
              gun.get("userdb").get(uname).get("key").once((data: any) => {
                if (userPassword === data) {
                  router.push(`/user/chat/${uname}@${userPassword}`)
                } else {
                  setError("Invalid username or password.")
                }
              });
            }
            catch (err: any) {
              console.log(err);
            }
          }}>Sign in</li>
        </ul>
        <h2 style={{ color: "red" }}>{error}</h2>;
      </form>
    </div>
  );
}

export default Main;