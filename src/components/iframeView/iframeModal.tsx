import React, { useState } from "react";
import Modal from "../a_miniComponents/modal/modal";
import './iframeModal.sass'
function IframeModal({ screen, removeModal, url }: { screen: string, removeModal: any, url:string }) {
  const [screenState, setScreenState] = useState(screen)
  const hugeScreenStyles = {
    height: "500px",
    width: "860px",
    top: "17px",
    borderRadius: "5px"
  }
  const mobileStyles = {
    height: "490px",
    width: "347px",
    top: "52px",
    borderRadius: "10px"
  }
  return (
    <Modal className="bg-transparent w-100" setModal={removeModal}>
      <div className="IframeModal flex" style={{ height: "98vh", width: "100%" }} >
        <div
          className="icons flex flex-column my-auto text-white position-absolute"
        >
          <i
            className={`
              fas fa-desktop flex textFather iconButton fs-3
              ${screenState === "hugeScreen" && "active"}
            `}
            style={{ transition: "color linear .3s" }}
            onClick={() => { setScreenState("hugeScreen") }}
          >
          </i>
          <i
            className={`
              fas fa-mobile-alt flex textFather iconButton fs-3
              ${screenState === "mobileScreen" && "active"}
            `}
            onClick={() => { setScreenState("mobileScreen") }}
          >
          </i>
        </div>
        <div className="flex position-relative">
          {
            screenState === "hugeScreen" ?
              <img src="https://i.ibb.co/Z2N2Xfz/p2-1.png" style={{ width: "900px" }} alt="" />
              :
              <img
                src="https://i.ibb.co/YbQfzzr/mobile-1.png"
                style={{ height: "600px", width: "400px" }} alt=""
              />
          }
          <iframe
            src="https://axis-eta.vercel.app/"
            title="axis"
            style={
              screenState === "hugeScreen"
                ? hugeScreenStyles
                : mobileStyles
              }
            className="position-absolute"
          ></iframe>
        </div>
      </div>
    </Modal>
  )
}
export default IframeModal
