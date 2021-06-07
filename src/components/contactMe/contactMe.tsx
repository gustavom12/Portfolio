import React, { useEffect, useState } from "react";
import useWindowOffset from "../../customHooks/useWindowOffset";
import Message from "../miniComponents/message";
import AnimatedInput from "./animatedInput/animatedInput";
import "./contactMe.sass";
function ContactMe({ inSpanish }: { inSpanish: boolean }) {
  const [modalForm, setModalForm] = useState(false);
  const [btnOpacity, setBtnOpacity] = useState(0);
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState<any>("");
  useEffect(() => {
    modalForm
      ? document.querySelector("body")?.classList.add("notScrollBar")
      : document.querySelector("body")?.classList.remove("notScrollBar");
  }, [modalForm]);
  const pageYOffset = useWindowOffset();
  useEffect(() => {
    const body: any = document.querySelector("body");
    const bodyHeight = window.getComputedStyle(body)?.height;
    const height = parseInt(bodyHeight.replace("px", ""));
    setBtnOpacity((pageYOffset * 10) / height);
    setBtnOpacity((i) => i - 0.03);
  }, [pageYOffset]);
  const onSubmit = async () => {
    const body = JSON.stringify({
      from: email,
      to: "gustavo.n.mercado2@gmail.com",
      subject,
      message,
    });
    try {
      inSpanish
        ? setSuccessMessage("Haz enviado el mensaje con éxito, será contestado en breve")
        : setSuccessMessage("Message sended successfully");
      setModalForm(false)
      setTimeout(() => {
        setSuccessMessage("");
      }, 5200);
      const data = await fetch("https://emailersender.herokuapp.com/emailer", {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body,
      });
      console.log( await data.json())
    } catch (error) {
      console.log({ error });
    }
  };
  return (
    <>
      {!modalForm ? (
        <button
          className="btn-contact"
          style={{
            opacity: btnOpacity,
            display: btnOpacity < 0.1 ? "none" : "inline",
          }}
          onClick={() => {
            setModalForm(true);
          }}
        >
          <i className="fas fa-envelope"></i>
        </button>
      ) : (
        <div className="formModal flex">
          <form data-aos="zoom-in" onSubmit={onSubmit}>
            <i
              className="fas fa-times x"
              onClick={() => {
                setModalForm(false);
              }}
            ></i>
            <h3 className="fw-bold text-center fs-1 mb-1">Contacto</h3>
            <div
              className="hr mx-auto bg-white mb-3"
              style={{ height: "4px", width: "12%" }}
            ></div>
            <AnimatedInput
              options={{
                pattern:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                inSpanish,
                setValue: setEmail,
                name: "Email",
              }}
            />
            <AnimatedInput
              options={{
                setValue: setSubject,
                inSpanish,
                name: inSpanish ? "Asunto" : "Subject",
              }}
            />
            <AnimatedInput
              options={{
                setValue: setMessage,
                inSpanish,
                name: inSpanish ? "Mensaje" : "Message",
                textarea: true,
              }}
            />
            <button
              type="submit"
              className="btn-darkmain text-serif2 fw-bold mx-auto"
            >
              {inSpanish ? "Enviar Email" : "Send Email"}
            </button>
          </form>
        </div>
      )}
      <Message message={successMessage} />
    </>
  );
}
export default ContactMe;
