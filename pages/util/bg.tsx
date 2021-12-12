import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";

const Background: NextPage = () => {
  const slogan = "the future is in your hands";
  const title = "SHIFT";
  const subtitles = [
    "progressive",
    "decentralized",
    "secure",
    "private",
    "powerful"
  ]

  const randint = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div>
      <Image 
        src={"/img/bg/unsp-" + randint(1, 10) + ".jpg"}
        alt="Random unsplash image"
        layout="fill"
      />
      <ul style={{
        display: "flex",
        flexDirection: "column",
        listStyleType: "none",
        margin: "2.5rem"
      }}>
        <li className="navItem" style={{
          backgroundColor: "transparent",
          width: "100%",
          border: "none",
          fontSize: "4rem",
          color: "rgb(238, 236, 236)",
        }}>the future is in your hands</li>
      </ul>
      <ul>
        <li>{subtitles[0]}</li>
        <li>{subtitles[1]}</li>
      </ul>
    </div>
  );
}

export default Background;