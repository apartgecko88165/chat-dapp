import type { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className="basic">
      <div>
        <ul style={{
          display: "flex",
          flexDirection: "row-reverse",
          listStyleType: "none",
          margin: "2.5rem",
        }}>
          <li className="navItem select">Login</li>
          <li className="navItem select" onClick={() => router.push("/user/signup")}>Sign Up</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;