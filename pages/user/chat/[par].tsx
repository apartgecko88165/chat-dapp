import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import Gun from "gun";
import { useState } from "react";
import { getUnpackedSettings } from "http2";

const Main: NextPage = () => {
  const gun = Gun();

  const router = useRouter();
  const { par } = router.query;

  var uname = par?.toString().split("@")[0];
  var key = par?.toString().split("@")[1];

  var netkey: string = "";

  gun.get("userdb").get(`${uname}`).get("key").once((data: any) => {
    netkey = data;
  });

  const inbox = [
    {sender: "bob1234", content: "good mornin'"},
    {sender: "example4humans", content: "What time is it?"},
    {sender: "some-person", content: "kaushgdf;aushdg;asudgh;sadg;ksajgbkabdgfhladfffffffffffffffffffffffffffasljdfblasdhgblasjdhflasdgfgaslhdfgalsdhjfglgasdfgashjdfgasldjhfgasjlgdfgajdshfjasljdhfsaghj"}
  ]

  var [selection, setSelection] = useState("");
  const [search, setSearch] = useState("");
  const [tagline, setTagline] = useState("");

  function handleSearchInput(event: any) {
    setSearch(event.target.value);
  }

  var messages = inbox.map((msg) => (
    <div key={msg.sender} className="select" onClick={() => setSelection(`${uname}&${msg.sender}`)}>
      <h4><p style={{ fontWeight: "normal", display: "inline" }}>from</p> {msg.sender}</h4>
      <div style={{
        border: "0.5rem solid darkgray",
        borderRadius: "1rem",
        paddingLeft: "1.25rem",
        backgroundColor: "lightgray",
        width: "20rem",
        wordWrap: "break-word"
      }}><p>{msg.content}</p></div>
    </div>
  ));

  if (key === netkey) {
    return (
      <div>
        <div style={{
          border: "0.1rem solid rgb(30, 30, 30)",
          width: `${uname?.length * 1.25}rem`,
          textAlign: "center",
          position: "absolute",
          top: 0,
          right: 0,
          borderRadius: "1rem"
        }}>
          <h1 style={{ color: "rgb(30, 30, 30)" }}>{uname}</h1>
        </div>
        <h2 style={{ position: "absolute", left: "10%", top: "5%" }}>Inbox</h2>
        <h3 style={{ position: "absolute", left: "20%", top: "7%", color: "red" }}>{tagline}</h3>
        <div style={{
          position: "absolute",
          left: "10%",
          top: "15%",
          border: "0.1rem solid rgb(30, 30, 30)",
          borderRadius: "1rem",
          padding: "1rem",
          display: "flex",
          flexDirection: "column"
        }}>
          <input type="text" style={{ height: "2rem", fontSize: "1.5rem"}} onChange={handleSearchInput}/>
          <div className="navItem select" style={{ width: "2rem", height: "2rem", position: "absolute", left: "87%", top: "3%" }} onClick={() => {
            gun.get("userdb").once((data: any) => {
              if (search in data) {
                setTagline("");
                if (`${uname}&${search}` in gun.get("chatdb")) {
                  
                }
              } else {
                setTagline("User does not exist.")
              }
            })
          }}>
            <Image
              src="/img/new.png"
              alt="New chat"
              width={50}
              height={50}
            />
          </div>
          {messages}
        </div>
        <div>
          <h1>{selection}</h1>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Main;