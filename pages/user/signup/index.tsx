import type { NextPage } from "next";
import Image from "next/image";
// import Gun from "gun";

// CSS that I couldn't figure out how to put in Next.js

const Main: NextPage = () => {
  // const gun = Gun();

  const registerUser = async (event: any) => {
    event.preventDefault();
    console.log("event")
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
        <input name="uname" type="text" className="inputField" placeholder="Minimum 6 characters" />
        <label htmlFor="passwrd" className="newline">Password</label>
        <input name="passwrd" type="password" className="inputField" placeholder="Good: 1b&bnf?+_YhRE$" />
        <label htmlFor="re-enter" className="newline">Re-enter password</label>
        <input name="re-enter" type="password" className="inputField" />
        <ul style={{
          display: "flex",
          flexDirection: "row-reverse",
          listStyleType: "none",
          margin: "2.5rem",
        }}>
          <li className="navItem select">Sign in</li>
          <li className="navItem select" style={{ left: "0%" }}>Register</li>
        </ul>
      </form>
    </div>
  );
}

export default Main;