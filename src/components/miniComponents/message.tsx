import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./message.sass";
function Message({ message }: { message: String }) {
  const [className, setClassName] = useState("d-none");
  useEffect(() => {
    if (message !== "") {
      setClassName("flex")
      setTimeout(()=>{
        setClassName("flex animate");
      },500)
    } else {
      setClassName("");
      setTimeout(()=>{
        setClassName("d-none")
      },1000)
    }
  }, [message]);
  return (
    <h5 style={{}} className={`message text-center text-serif2   ${className}  p-2 fw-bold`}>
      {message}
    </h5>
  );
}
export default Message;
