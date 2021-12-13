import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import { text } from "stream/consumers";

const Background: NextPage = (props: any) => {

  const subtitles = [
    "progressive",
    "decentralized",
    "secure",
    "private",
    "powerful"
  ]

  const randint = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
  let photo: number = randint(1, 10);

  let textColor: string = "lightgray";

  return (
    <div>
      <Image
        className="bg"
        src={"/img/bg/unsp-" + photo + ".jpg"}
        alt="Random unsplash image"
        layout="fill"
      />
      <ul style={{
        display: "flex",
        flexDirection: "column",
        listStyleType: "none",
        margin: "2.5rem",
      }}>
        <li className="navItem" style={{
          backgroundColor: "transparent",
          width: "100%", 
          border: "none",
          fontSize: "4rem",
          color: textColor,
        }}></li>
      </ul>
      <ul>
        <li>{subtitles[0]}</li>
        <li>{subtitles[1]}</li>
        <li>{subtitles[2]}</li>
        <li>{subtitles[3]}</li>
        <li>{subtitles[4]}</li>
      </ul> 
    </div>
  );
}

export default Background;