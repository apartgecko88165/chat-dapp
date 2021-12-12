import type { NextPage } from "next";
import { useRouter } from "next/router";

// components
import Background from "./util/bg";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className="basic">
      <Background />
      <div>
        <ul style={{
          display: "flex",
          flexDirection: "row-reverse",
          listStyleType: "none",
          margin: "2.5rem",
        }}>
          <li className="navItem select" onClick={() => router.push("/user/login")}>Login</li>
          <li className="navItem select" onClick={() => router.push("/user/signup")}>Sign Up</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;